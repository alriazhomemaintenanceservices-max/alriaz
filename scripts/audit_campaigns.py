#!/usr/bin/env python3
"""
Full audit of Saudi Home Experts Google Ads account.
Checks: campaigns, ad groups, keywords, ads, landing pages, extensions.
"""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException
import urllib.request
import urllib.parse
import ssl

CID = "2416146162"
MCC = "2554020790"
CONFIG = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"

def get_client():
    client = GoogleAdsClient.load_from_storage(CONFIG)
    client.login_customer_id = MCC
    return client

def check_url(url):
    """Check if a URL returns 200."""
    try:
        ctx = ssl.create_default_context()
        encoded = urllib.parse.quote(url, safe=':/?&=#%')
        req = urllib.request.Request(encoded, method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        resp = urllib.request.urlopen(req, timeout=10, context=ctx)
        return resp.status
    except Exception as e:
        try:
            req = urllib.request.Request(encoded, method='GET')
            req.add_header('User-Agent', 'Mozilla/5.0')
            resp = urllib.request.urlopen(req, timeout=10, context=ctx)
            return resp.status
        except Exception as e2:
            return f"ERROR: {e2}"

def main():
    client = get_client()
    ga = client.get_service("GoogleAdsService")

    issues = []
    total_keywords = 0
    total_ads = 0
    total_ag = 0
    landing_pages = set()

    # ==========================================
    # 1. CAMPAIGNS
    # ==========================================
    print("=" * 70)
    print("1. CAMPAIGNS")
    print("=" * 70)

    query = """
        SELECT campaign.id, campaign.name, campaign.status,
               campaign_budget.amount_micros,
               campaign.advertising_channel_type
        FROM campaign WHERE campaign.status != 'REMOVED'
    """
    resp = ga.search(customer_id=CID, query=query)
    campaigns = []
    for row in resp:
        c = row.campaign
        budget = row.campaign_budget.amount_micros / 1_000_000
        campaigns.append({"id": str(c.id), "name": c.name, "status": c.status.name})
        status = "🟢" if c.status.name == "ENABLED" else "🔴"
        print(f"  {status} {c.name} | {c.status.name} | {budget:.0f} PKR/day | {c.advertising_channel_type.name}")

    # ==========================================
    # 2. AD GROUPS
    # ==========================================
    print(f"\n{'='*70}")
    print("2. AD GROUPS")
    print("=" * 70)

    query = """
        SELECT campaign.name, ad_group.name, ad_group.status,
               ad_group.cpc_bid_micros
        FROM ad_group
        WHERE campaign.status != 'REMOVED'
        AND ad_group.status != 'REMOVED'
        ORDER BY campaign.name, ad_group.name
    """
    resp = ga.search(customer_id=CID, query=query)
    current_campaign = ""
    for row in resp:
        total_ag += 1
        if row.campaign.name != current_campaign:
            current_campaign = row.campaign.name
            print(f"\n  📦 {current_campaign}")
        ag = row.ad_group
        cpc = ag.cpc_bid_micros / 1_000_000
        status = "✅" if ag.status.name == "ENABLED" else "⏸️"
        print(f"    {status} {ag.name} (CPC: {cpc:.0f} PKR)")

    # ==========================================
    # 3. KEYWORDS
    # ==========================================
    print(f"\n{'='*70}")
    print("3. KEYWORDS")
    print("=" * 70)

    query = """
        SELECT campaign.name, ad_group.name,
               ad_group_criterion.keyword.text,
               ad_group_criterion.keyword.match_type,
               ad_group_criterion.status
        FROM ad_group_criterion
        WHERE ad_group_criterion.type = 'KEYWORD'
        AND campaign.status != 'REMOVED'
        AND ad_group.status != 'REMOVED'
        AND ad_group_criterion.status != 'REMOVED'
        ORDER BY campaign.name, ad_group.name
    """
    resp = ga.search(customer_id=CID, query=query)
    current_ag = ""
    for row in resp:
        total_keywords += 1
        ag_name = f"{row.campaign.name} > {row.ad_group.name}"
        if ag_name != current_ag:
            current_ag = ag_name
            print(f"\n  {row.ad_group.name}:")
        kw = row.ad_group_criterion.keyword
        print(f"    • [{kw.match_type.name}] {kw.text}")

    # ==========================================
    # 4. ADS & LANDING PAGES
    # ==========================================
    print(f"\n{'='*70}")
    print("4. ADS & LANDING PAGES")
    print("=" * 70)

    query = """
        SELECT campaign.name, ad_group.name,
               ad_group_ad.ad.final_urls,
               ad_group_ad.ad.responsive_search_ad.headlines,
               ad_group_ad.ad.responsive_search_ad.descriptions,
               ad_group_ad.policy_summary.approval_status
        FROM ad_group_ad
        WHERE campaign.status != 'REMOVED'
        AND ad_group.status != 'REMOVED'
        AND ad_group_ad.status != 'REMOVED'
    """
    resp = ga.search(customer_id=CID, query=query)
    for row in resp:
        total_ads += 1
        ad = row.ad_group_ad.ad
        urls = list(ad.final_urls)
        approval = row.ad_group_ad.policy_summary.approval_status.name
        headlines = [h.text for h in ad.responsive_search_ad.headlines]
        descs = [d.text for d in ad.responsive_search_ad.descriptions]

        for url in urls:
            landing_pages.add(url)

        status_icon = "✅" if approval == "APPROVED" else ("⏳" if approval == "UNKNOWN" else "❌")
        print(f"\n  {status_icon} {row.campaign.name} > {row.ad_group.name}")
        print(f"     Approval: {approval}")
        print(f"     URL: {urls[0] if urls else 'NONE'}")
        print(f"     Headlines ({len(headlines)}): {headlines[0]}...")
        print(f"     Descriptions ({len(descs)}): {descs[0][:60]}...")

        if not urls:
            issues.append(f"NO URL: {row.ad_group.name}")

    # ==========================================
    # 5. NEGATIVE KEYWORDS
    # ==========================================
    print(f"\n{'='*70}")
    print("5. NEGATIVE KEYWORDS")
    print("=" * 70)

    query = """
        SELECT campaign.name, campaign_criterion.keyword.text
        FROM campaign_criterion
        WHERE campaign_criterion.negative = true
        AND campaign.status != 'REMOVED'
    """
    resp = ga.search(customer_id=CID, query=query)
    neg_counts = {}
    for row in resp:
        name = row.campaign.name
        neg_counts[name] = neg_counts.get(name, 0) + 1
    for name, count in neg_counts.items():
        print(f"  {name}: {count} negative keywords")

    # ==========================================
    # 6. EXTENSIONS
    # ==========================================
    print(f"\n{'='*70}")
    print("6. EXTENSIONS")
    print("=" * 70)

    query = """
        SELECT campaign.name, campaign_asset.field_type
        FROM campaign_asset
        WHERE campaign.status != 'REMOVED'
    """
    resp = ga.search(customer_id=CID, query=query)
    ext_counts = {}
    for row in resp:
        key = f"{row.campaign.name} | {row.campaign_asset.field_type.name}"
        ext_counts[key] = ext_counts.get(key, 0) + 1
    for key, count in sorted(ext_counts.items()):
        print(f"  {key}: {count}")

    # ==========================================
    # 7. LANDING PAGE URL CHECK
    # ==========================================
    print(f"\n{'='*70}")
    print("7. LANDING PAGE URL CHECK")
    print("=" * 70)

    for url in sorted(landing_pages):
        status = check_url(url)
        icon = "✅" if status == 200 else "❌"
        print(f"  {icon} [{status}] {url}")
        if status != 200:
            issues.append(f"LANDING PAGE {status}: {url}")

    # ==========================================
    # SUMMARY
    # ==========================================
    print(f"\n{'='*70}")
    print("AUDIT SUMMARY")
    print("=" * 70)
    print(f"  Campaigns:        {len(campaigns)}")
    print(f"  Ad Groups:        {total_ag}")
    print(f"  Keywords:         {total_keywords}")
    print(f"  Ads:              {total_ads}")
    print(f"  Landing Pages:    {len(landing_pages)}")
    print(f"  Negative KW sets: {len(neg_counts)}")

    if issues:
        print(f"\n  ⚠️  ISSUES FOUND ({len(issues)}):")
        for issue in issues:
            print(f"    ❌ {issue}")
    else:
        print(f"\n  ✅ NO ISSUES FOUND — ALL CLEAR")


if __name__ == "__main__":
    main()
