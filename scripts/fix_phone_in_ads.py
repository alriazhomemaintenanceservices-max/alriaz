#!/usr/bin/env python3
"""
Fix PHONE_NUMBER_IN_AD_TEXT policy violation.
Removes old ads, creates new ones without phone numbers in text.
Phone number is already in the call extension — no need in ad copy.
"""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException
import re

CID = "2416146162"
MCC = "2554020790"
CONFIG = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"

# Phone patterns to remove from Arabic text
PHONE_PATTERNS = [
    "‎٠٥٠ ٨٩٠ ١٥٣٦",
    "٠٥٠ ٨٩٠ ١٥٣٦",
    "٠٥٠٨٩٠١٥٣٦",
    "‎٠٥٠٨٩٠١٥٣٦",
    "050 890 1536",
    "0508901536",
]

# Replacement headlines (no phone numbers)
REPLACEMENTS = {
    "‎٠٥٠ ٨٩٠ ١٥٣٦": "اتصل الحين — متوفرين",
    "٠٥٠ ٨٩٠ ١٥٣٦": "اتصل الحين — متوفرين",
    "اتصل الآن ‎٠٥٠٨٩٠١٥٣٦": "اتصل الحين — نرد فوراً",
    "اتصل الآن ٠٥٠٨٩٠١٥٣٦": "اتصل الحين — نرد فوراً",
}


def has_phone(text):
    for p in PHONE_PATTERNS:
        if p in text:
            return True
    return False


def clean_text(text):
    """Remove phone numbers, replace with clean alternatives."""
    for old, new in REPLACEMENTS.items():
        if old in text:
            return new
    # Generic cleanup — remove any remaining phone patterns
    for p in PHONE_PATTERNS:
        text = text.replace(p, "").strip()
    # If text becomes too short after removal, replace entirely
    if len(text.strip()) < 5:
        return "اتصل الحين — متوفرين"
    # Remove trailing dots/dashes
    return text.strip().rstrip(".").rstrip("-").rstrip("—").strip()


def main():
    client = GoogleAdsClient.load_from_storage(CONFIG)
    client.login_customer_id = MCC
    ga = client.get_service("GoogleAdsService")
    ad_svc = client.get_service("AdGroupAdService")
    ad_group_svc = client.get_service("AdGroupService")

    # Get all ads with phone numbers
    query = """
        SELECT ad_group.resource_name, ad_group.name, campaign.name,
               ad_group_ad.ad.id,
               ad_group_ad.ad.resource_name,
               ad_group_ad.ad.responsive_search_ad.headlines,
               ad_group_ad.ad.responsive_search_ad.descriptions,
               ad_group_ad.ad.final_urls,
               ad_group_ad.ad.responsive_search_ad.path1,
               ad_group_ad.ad.responsive_search_ad.path2,
               ad_group_ad.policy_summary.policy_topic_entries
        FROM ad_group_ad
        WHERE campaign.status = 'ENABLED'
        AND ad_group.status = 'ENABLED'
        AND ad_group_ad.status = 'ENABLED'
    """
    resp = ga.search(customer_id=CID, query=query)

    fixed = 0
    skipped = 0

    for row in resp:
        topics = [t.topic for t in row.ad_group_ad.policy_summary.policy_topic_entries]
        if "PHONE_NUMBER_IN_AD_TEXT" not in topics:
            skipped += 1
            continue

        ad = row.ad_group_ad.ad
        ag_resource = row.ad_group.resource_name
        ag_name = row.ad_group.name
        campaign_name = row.campaign.name

        old_headlines = [h.text for h in ad.responsive_search_ad.headlines]
        old_descs = [d.text for d in ad.responsive_search_ad.descriptions]
        urls = list(ad.final_urls)
        path1 = ad.responsive_search_ad.path1
        path2 = ad.responsive_search_ad.path2

        # Clean headlines and descriptions
        new_headlines = []
        for h in old_headlines:
            if has_phone(h):
                cleaned = clean_text(h)
                if cleaned and len(cleaned) >= 3:
                    new_headlines.append(cleaned[:30])
            else:
                new_headlines.append(h[:30])

        new_descs = []
        for d in old_descs:
            if has_phone(d):
                cleaned = clean_text(d)
                if cleaned and len(cleaned) >= 3:
                    new_descs.append(cleaned[:90])
            else:
                new_descs.append(d[:90])

        # Deduplicate headlines
        seen = set()
        unique_headlines = []
        for h in new_headlines:
            if h not in seen:
                seen.add(h)
                unique_headlines.append(h)
        new_headlines = unique_headlines

        # Need at least 3 headlines and 2 descriptions
        if len(new_headlines) < 3:
            new_headlines.extend(["خدمة سريعة وأمينة", "متوفرين ٢٤/٧", "ضمان على الشغل"])
            new_headlines = list(dict.fromkeys(new_headlines))[:15]
        if len(new_descs) < 2:
            new_descs.append("خدمة احترافية مباشرة بدون وسطاء. نوصلك خلال ساعة. اتصل الحين!")

        # Step 1: Remove old ad
        remove_op = client.get_type("AdGroupAdOperation")
        remove_op.remove = f"customers/{CID}/adGroupAds/{ag_resource.split('/')[-1]}~{ad.id}"

        try:
            ad_svc.mutate_ad_group_ads(customer_id=CID, operations=[remove_op])
        except:
            pass  # If remove fails, create will still work

        # Step 2: Create new ad without phone numbers
        create_op = client.get_type("AdGroupAdOperation")
        new_aga = create_op.create
        new_aga.ad_group = ag_resource
        new_aga.status = client.enums.AdGroupAdStatusEnum.ENABLED
        new_ad = new_aga.ad
        for u in urls:
            new_ad.final_urls.append(u)
        for h in new_headlines[:15]:
            asset = client.get_type("AdTextAsset")
            asset.text = h[:30]
            new_ad.responsive_search_ad.headlines.append(asset)
        for d in new_descs[:4]:
            asset = client.get_type("AdTextAsset")
            asset.text = d[:90]
            new_ad.responsive_search_ad.descriptions.append(asset)
        new_ad.responsive_search_ad.path1 = path1[:15] if path1 else ""
        new_ad.responsive_search_ad.path2 = path2[:15] if path2 else ""

        try:
            ad_svc.mutate_ad_group_ads(customer_id=CID, operations=[create_op])
            fixed += 1
            print(f"  ✅ Fixed: {campaign_name} > {ag_name}")
        except GoogleAdsException as ex:
            for e in ex.failure.errors:
                print(f"  ❌ {ag_name}: {e.message}")
                if "PHONE_NUMBER" in e.message:
                    # Still has phone somewhere — print the ad text for debugging
                    print(f"     Headlines: {new_headlines}")
                    print(f"     Descs: {new_descs[:1]}")

    print(f"\n{'='*50}")
    print(f"Fixed: {fixed} ads")
    print(f"Skipped (no issue): {skipped} ads")


if __name__ == "__main__":
    main()
