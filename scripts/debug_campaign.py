#!/usr/bin/env python3
"""Debug campaign creation — minimal test."""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

SAUDI_CUSTOMER_ID = "2416146162"
MCC_CUSTOMER_ID = "2554020790"
CONFIG_PATH = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"

def main():
    client = GoogleAdsClient.load_from_storage(CONFIG_PATH)
    client.login_customer_id = MCC_CUSTOMER_ID

    # First list existing campaigns
    print("Listing existing campaigns...")
    ga_service = client.get_service("GoogleAdsService")
    query = """
        SELECT campaign.id, campaign.name, campaign.status,
               campaign_budget.amount_micros
        FROM campaign
        WHERE campaign.status != 'REMOVED'
    """
    try:
        response = ga_service.search(customer_id=SAUDI_CUSTOMER_ID, query=query)
        for row in response:
            c = row.campaign
            budget = row.campaign_budget.amount_micros / 1_000_000
            print(f"  {c.name} | Status: {c.status.name} | Budget: {budget:.0f} PKR")
    except GoogleAdsException as ex:
        for error in ex.failure.errors:
            print(f"  List error: {error.message}")

    # Try creating a simple test campaign
    print("\nCreating test campaign...")
    try:
        # Create budget first
        budget_service = client.get_service("CampaignBudgetService")
        budget_op = client.get_type("CampaignBudgetOperation")
        budget = budget_op.create
        budget.name = "TEST - Debug Budget"
        budget.amount_micros = 100_000_000  # 100 PKR
        budget.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD

        budget_resp = budget_service.mutate_campaign_budgets(
            customer_id=SAUDI_CUSTOMER_ID, operations=[budget_op]
        )
        budget_resource = budget_resp.results[0].resource_name
        print(f"  ✅ Budget created: {budget_resource}")

        # Create campaign
        campaign_service = client.get_service("CampaignService")
        campaign_op = client.get_type("CampaignOperation")
        campaign = campaign_op.create
        campaign.name = "TEST - Debug Campaign (DELETE ME)"
        campaign.campaign_budget = budget_resource
        campaign.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
        campaign.status = client.enums.CampaignStatusEnum.PAUSED

        # Try with manual CPC
        campaign.manual_cpc.enhanced_cpc_enabled = False

        # Network settings
        campaign.network_settings.target_google_search = True
        campaign.network_settings.target_search_network = False
        campaign.network_settings.target_content_network = False

        campaign_resp = campaign_service.mutate_campaigns(
            customer_id=SAUDI_CUSTOMER_ID, operations=[campaign_op]
        )
        print(f"  ✅ Campaign created: {campaign_resp.results[0].resource_name}")

    except GoogleAdsException as ex:
        print(f"\n  ❌ Error details:")
        for error in ex.failure.errors:
            print(f"    Message: {error.message}")
            print(f"    Error code: {error.error_code}")
            if error.location:
                for fe in error.location.field_path_elements:
                    print(f"    Field: {fe.field_name} (index: {fe.index})")
    except Exception as e:
        print(f"  ❌ General error: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()
