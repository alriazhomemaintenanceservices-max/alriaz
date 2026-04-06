#!/usr/bin/env python3
"""Test minimal campaign creation with different bidding strategies."""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException
import random, string

CID = "2416146162"
MCC = "2554020790"
CONFIG = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"

def main():
    client = GoogleAdsClient.load_from_storage(CONFIG)
    client.login_customer_id = MCC

    sfx = ''.join(random.choices(string.ascii_lowercase, k=4))

    # Budget
    bsvc = client.get_service("CampaignBudgetService")
    bop = client.get_type("CampaignBudgetOperation")
    bop.create.name = f"Test Budget {sfx}"
    bop.create.amount_micros = 100_000_000
    bop.create.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD
    try:
        br = bsvc.mutate_campaign_budgets(customer_id=CID, operations=[bop])
        budget_r = br.results[0].resource_name
        print(f"✅ Budget: {budget_r}")
    except GoogleAdsException as ex:
        for e in ex.failure.errors:
            print(f"Budget error: {e.message}")
        return

    # Try different bidding strategies
    strategies = [
        ("manual_cpc", lambda c, cl: setattr(c.manual_cpc, 'enhanced_cpc_enabled', False)),
        ("maximize_clicks", lambda c, cl: setattr(c, 'maximize_clicks', cl.get_type("MaximizeClicks")())),
        ("target_spend", lambda c, cl: None),  # default
    ]

    csvc = client.get_service("CampaignService")

    for name, setter in strategies:
        print(f"\nTrying bidding strategy: {name}")
        cop = client.get_type("CampaignOperation")
        c = cop.create
        c.name = f"Test {name} {sfx}"
        c.campaign_budget = budget_r
        c.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
        c.status = client.enums.CampaignStatusEnum.PAUSED
        c.contains_eu_political_advertising = 2
        c.network_settings.target_google_search = True
        c.network_settings.target_search_network = False
        c.network_settings.target_content_network = False

        if setter:
            try:
                setter(c, client)
            except Exception as e:
                print(f"  Setter error: {e}")
                continue

        try:
            resp = csvc.mutate_campaigns(customer_id=CID, operations=[cop])
            print(f"  ✅ SUCCESS with {name}: {resp.results[0].resource_name}")
            # Clean up - pause it
            return name  # Return winning strategy
        except GoogleAdsException as ex:
            for e in ex.failure.errors:
                print(f"  ❌ {name}: {e.message} | {e.error_code}")


if __name__ == "__main__":
    winner = main()
    if winner:
        print(f"\n🎯 Use bidding strategy: {winner}")
