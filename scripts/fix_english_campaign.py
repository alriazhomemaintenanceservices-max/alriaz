#!/usr/bin/env python3
"""Fix English campaign — create remaining ad groups with shorter headlines."""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

CID = "2416146162"
MCC = "2554020790"
CONFIG = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"
BASE = "https://saudihomeexperts.com"

def get_client():
    client = GoogleAdsClient.load_from_storage(CONFIG)
    client.login_customer_id = MCC
    return client

def create_ag(client, campaign_r, name, cpc):
    svc = client.get_service("AdGroupService")
    op = client.get_type("AdGroupOperation")
    ag = op.create
    ag.name = name
    ag.campaign = campaign_r
    ag.type_ = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
    ag.cpc_bid_micros = cpc
    ag.status = client.enums.AdGroupStatusEnum.ENABLED
    resp = svc.mutate_ad_groups(customer_id=CID, operations=[op])
    r = resp.results[0].resource_name
    print(f"  ✅ AG: {name}")
    return r

def add_kws(client, ag_r, keywords):
    svc = client.get_service("AdGroupCriterionService")
    ops = []
    for kw in keywords:
        op = client.get_type("AdGroupCriterionOperation")
        op.create.ad_group = ag_r
        op.create.keyword.text = kw
        op.create.keyword.match_type = client.enums.KeywordMatchTypeEnum.PHRASE
        ops.append(op)
    svc.mutate_ad_group_criteria(customer_id=CID, operations=ops)
    print(f"    + {len(ops)} keywords")

def create_rsa(client, ag_r, headlines, descs, url, p1, p2):
    svc = client.get_service("AdGroupAdService")
    op = client.get_type("AdGroupAdOperation")
    aga = op.create
    aga.ad_group = ag_r
    aga.status = client.enums.AdGroupAdStatusEnum.ENABLED
    ad = aga.ad
    ad.final_urls.append(url)
    for h in headlines:
        a = client.get_type("AdTextAsset")
        a.text = h[:30]  # Max 30 chars
        ad.responsive_search_ad.headlines.append(a)
    for d in descs:
        a = client.get_type("AdTextAsset")
        a.text = d[:90]  # Max 90 chars
        ad.responsive_search_ad.descriptions.append(a)
    ad.responsive_search_ad.path1 = p1[:15]
    ad.responsive_search_ad.path2 = p2[:15]
    svc.mutate_ad_group_ads(customer_id=CID, operations=[op])
    print(f"    + RSA → {url}")

def main():
    client = get_client()

    # Find the English campaign
    ga = client.get_service("GoogleAdsService")
    query = """
        SELECT campaign.resource_name, campaign.name
        FROM campaign
        WHERE campaign.name = 'SHE - English Combined'
        AND campaign.status != 'REMOVED'
    """
    resp = ga.search(customer_id=CID, query=query)
    campaign_r = None
    for row in resp:
        campaign_r = row.campaign.resource_name
        print(f"Found campaign: {row.campaign.name}")

    if not campaign_r:
        print("❌ English campaign not found")
        return

    # Find existing ad group to check what was already created
    query2 = """
        SELECT ad_group.name, ad_group.resource_name
        FROM ad_group
        WHERE campaign.name = 'SHE - English Combined'
    """
    resp2 = ga.search(customer_id=CID, query=query2)
    existing = set()
    for row in resp2:
        existing.add(row.ad_group.name)
        print(f"  Existing AG: {row.ad_group.name}")

    # Create RSA for Electrician Near Me if it exists but has no ad
    if "EN - Electrician Near Me" in existing:
        # Find the ad group resource
        query3 = """
            SELECT ad_group.resource_name
            FROM ad_group
            WHERE ad_group.name = 'EN - Electrician Near Me'
            AND campaign.name = 'SHE - English Combined'
        """
        resp3 = ga.search(customer_id=CID, query=query3)
        for row in resp3:
            ag_r = row.ad_group.resource_name
            print(f"\n  Adding RSA to existing EN - Electrician Near Me")
            create_rsa(client, ag_r,
                ["Electrician Riyadh 24/7", "Emergency Electrician Now", "AC Repair Same Day",
                 "30-Day Work Warranty", "Call Us Now", "30+ Years Experience",
                 "North Riyadh Coverage", "Direct Service No Agency", "WhatsApp Available",
                 "Prayer-Time Scheduling"],
                ["Electrician in Riyadh. AC, wiring, faults. Arrives in 1 hour. Call now!",
                 "30+ years family experience. Fair prices, 30-day warranty. Contact us today!",
                 "WhatsApp us a photo for free assessment. Available 24/7 in all Riyadh."],
                f"{BASE}/", "Electrician", "Riyadh")

    # Create missing ad groups
    ad_groups = [
        {
            "name": "EN - Plumber Near Me",
            "cpc": 35_000_000,
            "kws": ["plumber near me", "plumber riyadh", "emergency plumber riyadh", "water leak repair riyadh"],
            "headlines": ["Plumber Riyadh 24/7", "Emergency Plumber Now", "Water Leak Repair Fast",
                         "30-Day Work Warranty", "Call Us Now", "30+ Years Experience",
                         "Drain Unblocking", "Direct Service No Agency", "WhatsApp Available",
                         "North Riyadh Coverage"],
            "descs": ["Plumber in Riyadh. Leaks, drains, heaters. Arrives in 1 hour. Call!",
                     "30+ years experience. Fair prices, warranty. Contact Us Today",
                     "WhatsApp us a photo for free assessment. Available 24/7."],
            "url": f"{BASE}/",
            "p1": "Plumber", "p2": "Riyadh",
        },
        {
            "name": "EN - AC Maintenance",
            "cpc": 30_000_000,
            "kws": ["ac repair riyadh", "ac maintenance riyadh", "air conditioning riyadh", "ac not cooling riyadh"],
            "headlines": ["AC Repair Riyadh Today", "AC Not Cooling? We Fix", "Freon Refill & Service",
                         "30-Day Warranty", "Call Us Now", "Available 24/7",
                         "30+ Years Experience", "Fair Prices Guaranteed", "North Riyadh Area", "Expert AC Technician"],
            "descs": ["AC stopped? Technician in 1 hour. Freon, repairs, cleaning.",
                     "Professional AC service in Riyadh. 30+ years. Call now!",
                     "Don't suffer the heat. WhatsApp a photo. Contact Us Today"],
            "url": f"{BASE}/",
            "p1": "AC-Repair", "p2": "Riyadh",
        },
        {
            "name": "EN - Home Maintenance",
            "cpc": 25_000_000,
            "kws": ["home maintenance riyadh", "home repair riyadh", "handyman riyadh", "intercom installation riyadh"],
            "headlines": ["Home Maintenance Riyadh", "Electrician + Plumber", "One Team All Solutions",
                         "30-Day Warranty", "Call Us Now", "Available 24/7",
                         "30+ Years Experience", "Security Cameras", "Smart Doorbell Setup", "Direct Service"],
            "descs": ["Complete home maintenance. Electrical, plumbing, intercom. One team.",
                     "30+ years experience. Fair prices, warranty. Call now!",
                     "Electrician, plumber, security. We arrive in 1 hour. Contact Us Today"],
            "url": f"{BASE}/services/",
            "p1": "Home", "p2": "Riyadh",
        },
    ]

    for ag_def in ad_groups:
        if ag_def["name"] in existing:
            print(f"\n  Skipping {ag_def['name']} (already exists)")
            continue
        print(f"\n  Creating {ag_def['name']}")
        ag_r = create_ag(client, campaign_r, ag_def["name"], ag_def["cpc"])
        add_kws(client, ag_r, ag_def["kws"])
        create_rsa(client, ag_r, ag_def["headlines"], ag_def["descs"],
                   ag_def["url"], ag_def["p1"], ag_def["p2"])

    print("\n✅ English campaign complete!")


if __name__ == "__main__":
    main()
