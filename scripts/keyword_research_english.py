#!/usr/bin/env python3
"""
English keyword research for Saudi Home Experts — comparison with Arabic.
"""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

SAUDI_CUSTOMER_ID = "2416146162"
MCC_CUSTOMER_ID = "2554020790"
CONFIG_PATH = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"

ENGLISH_KEYWORDS = [
    "electrician riyadh",
    "electrician near me riyadh",
    "plumber riyadh",
    "plumber near me riyadh",
    "AC repair riyadh",
    "electrician al narjis",
    "plumber al narjis",
    "emergency electrician riyadh",
    "emergency plumber riyadh",
    "home maintenance riyadh",
    "electrical repair riyadh",
    "water leak repair riyadh",
    "AC maintenance riyadh",
    "plumber near me",
    "electrician near me",
    "intercom installation riyadh",
]

def get_client():
    client = GoogleAdsClient.load_from_storage(CONFIG_PATH)
    client.login_customer_id = MCC_CUSTOMER_ID
    return client

def research(client, customer_id, keywords, language_id, language_name):
    keyword_plan_idea_service = client.get_service("KeywordPlanIdeaService")

    request = client.get_type("GenerateKeywordIdeasRequest")
    request.customer_id = customer_id
    request.language = f"languageConstants/{language_id}"
    request.geo_target_constants.append("geoTargetConstants/2682")  # Saudi Arabia
    request.keyword_plan_network = client.enums.KeywordPlanNetworkEnum.GOOGLE_SEARCH
    request.keyword_seed.keywords.extend(keywords)

    print(f"\n{'='*80}")
    print(f"  {language_name} KEYWORDS — Saudi Arabia")
    print(f"{'='*80}")
    print(f"{'Keyword':<45} {'Vol':<8} {'Comp':<12} {'Low Bid':<10} {'High Bid':<10}")
    print(f"{'-'*80}")

    results = []
    try:
        response = keyword_plan_idea_service.generate_keyword_ideas(request=request)
        for idea in response.results:
            kw = idea.text
            m = idea.keyword_idea_metrics
            vol = m.avg_monthly_searches or 0
            comp = m.competition.name if m.competition else "N/A"
            low = (m.low_top_of_page_bid_micros or 0) / 1_000_000
            high = (m.high_top_of_page_bid_micros or 0) / 1_000_000
            results.append({"kw": kw, "vol": vol, "comp": comp, "low": low, "high": high})
    except GoogleAdsException as ex:
        for error in ex.failure.errors:
            print(f"  Error: {error.message}")
        return []

    results.sort(key=lambda x: x["vol"], reverse=True)
    for r in results[:40]:
        print(f"{r['kw']:<45} {r['vol']:<8} {r['comp']:<12} {r['low']:<10.2f} {r['high']:<10.2f}")

    total_vol = sum(r["vol"] for r in results)
    avg_low = sum(r["low"] for r in results if r["low"] > 0) / max(len([r for r in results if r["low"] > 0]), 1)
    avg_high = sum(r["high"] for r in results if r["high"] > 0) / max(len([r for r in results if r["high"] > 0]), 1)

    print(f"\n📊 {language_name} Summary:")
    print(f"   Total keywords returned: {len(results)}")
    print(f"   Total monthly search volume: {total_vol:,}")
    print(f"   Average low bid: {avg_low:.2f} SAR")
    print(f"   Average high bid: {avg_high:.2f} SAR")
    print(f"   Keywords with 100+ searches: {len([r for r in results if r['vol'] >= 100])}")

    return results


def main():
    client = get_client()

    # English keywords
    en_results = research(client, SAUDI_CUSTOMER_ID, ENGLISH_KEYWORDS, "1000", "ENGLISH")

    # Arabic keywords (same ones from our campaign)
    arabic_keywords = [
        "كهربائي الرياض", "كهربائي قريب مني", "كهربائي قريب من موقعي",
        "سباك الرياض", "سباك قريب مني", "سباك قريب من موقعي",
        "صيانة مكيفات الرياض", "سباك شمال الرياض", "كهربائي شمال الرياض",
        "المكيف ما يبرد", "تسريب مياه", "المجاري مسدودة",
        "كهربائي النرجس", "سباك النرجس",
        "سباكة وكهرباء الرياض",
    ]
    ar_results = research(client, SAUDI_CUSTOMER_ID, arabic_keywords, "1019", "ARABIC")

    # Comparison
    en_avg_low = sum(r["low"] for r in en_results if r["low"] > 0) / max(len([r for r in en_results if r["low"] > 0]), 1)
    en_avg_high = sum(r["high"] for r in en_results if r["high"] > 0) / max(len([r for r in en_results if r["high"] > 0]), 1)
    ar_avg_low = sum(r["low"] for r in ar_results if r["low"] > 0) / max(len([r for r in ar_results if r["low"] > 0]), 1)
    ar_avg_high = sum(r["high"] for r in ar_results if r["high"] > 0) / max(len([r for r in ar_results if r["high"] > 0]), 1)
    en_total_vol = sum(r["vol"] for r in en_results)
    ar_total_vol = sum(r["vol"] for r in ar_results)

    print(f"\n{'='*80}")
    print(f"  ARABIC vs ENGLISH — COMPARISON")
    print(f"{'='*80}")
    print(f"{'Metric':<35} {'Arabic':<20} {'English':<20}")
    print(f"{'-'*80}")
    print(f"{'Total search volume':<35} {ar_total_vol:<20,} {en_total_vol:<20,}")
    print(f"{'Avg low bid (SAR)':<35} {ar_avg_low:<20.2f} {en_avg_low:<20.2f}")
    print(f"{'Avg high bid (SAR)':<35} {ar_avg_high:<20.2f} {en_avg_high:<20.2f}")
    print(f"{'Keywords returned':<35} {len(ar_results):<20} {len(en_results):<20}")


if __name__ == "__main__":
    main()
