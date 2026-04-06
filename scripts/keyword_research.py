#!/usr/bin/env python3
"""
Keyword research for Saudi Home Experts using Google Ads Keyword Planner API.
Pulls search volumes, competition, and suggested bids for our target keywords.
"""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

SAUDI_CUSTOMER_ID = "2416146162"
MCC_CUSTOMER_ID = "2554020790"
CONFIG_PATH = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"

# Seed keywords to research
SEED_KEYWORDS = [
    # Electrician
    "كهربائي الرياض",
    "كهربائي النرجس",
    "كهربائي الياسمين",
    "فني كهرباء الرياض",
    "المكيف ما يبرد",
    "الكهرب يفصل",
    "صيانة مكيفات الرياض",
    "كهربائي قريب",
    "كهربائي قريب مني",
    # Plumber
    "سباك الرياض",
    "سباك النرجس",
    "سباك الياسمين",
    "فني سباكة الرياض",
    "تسريب مياه",
    "المجاري مسدودة",
    "سباك طوارئ",
    "سباك قريب",
    "سباك قريب مني",
    # Near me
    "فني قريب مني",
    "صيانة منازل الرياض",
]


def get_client():
    client = GoogleAdsClient.load_from_storage(CONFIG_PATH)
    client.login_customer_id = MCC_CUSTOMER_ID
    return client


def get_keyword_ideas(client, customer_id, keywords):
    """Get keyword ideas with search volume and competition data."""
    keyword_plan_idea_service = client.get_service("KeywordPlanIdeaService")

    request = client.get_type("GenerateKeywordIdeasRequest")
    request.customer_id = customer_id
    request.language = "languageConstants/1019"  # Arabic
    request.geo_target_constants.append("geoTargetConstants/2682")  # Saudi Arabia
    request.keyword_plan_network = client.enums.KeywordPlanNetworkEnum.GOOGLE_SEARCH

    # Use seed keywords
    request.keyword_seed.keywords.extend(keywords)

    print(f"\n{'='*80}")
    print(f"{'Keyword':<40} {'Avg Monthly':<15} {'Competition':<15} {'Low Bid':<10} {'High Bid':<10}")
    print(f"{'='*80}")

    results = []
    try:
        response = keyword_plan_idea_service.generate_keyword_ideas(request=request)

        for idea in response.results:
            keyword = idea.text
            metrics = idea.keyword_idea_metrics

            avg_monthly = metrics.avg_monthly_searches if metrics.avg_monthly_searches else 0
            competition = metrics.competition.name if metrics.competition else "N/A"

            low_bid = metrics.low_top_of_page_bid_micros / 1_000_000 if metrics.low_top_of_page_bid_micros else 0
            high_bid = metrics.high_top_of_page_bid_micros / 1_000_000 if metrics.high_top_of_page_bid_micros else 0

            results.append({
                'keyword': keyword,
                'volume': avg_monthly,
                'competition': competition,
                'low_bid': low_bid,
                'high_bid': high_bid,
            })

            print(f"{keyword:<40} {avg_monthly:<15} {competition:<15} {low_bid:<10.2f} {high_bid:<10.2f}")

    except GoogleAdsException as ex:
        print(f"\nAPI Error:")
        for error in ex.failure.errors:
            print(f"  {error.message}")
        return []

    # Sort by volume
    results.sort(key=lambda x: x['volume'], reverse=True)

    print(f"\n{'='*80}")
    print(f"TOP KEYWORDS BY SEARCH VOLUME:")
    print(f"{'='*80}")
    for r in results[:30]:
        bid_range = f"{r['low_bid']:.2f} - {r['high_bid']:.2f} SAR"
        print(f"  {r['volume']:>6} searches/mo | {r['competition']:<10} | {bid_range:<20} | {r['keyword']}")

    return results


def main():
    print("\n" + "=" * 60)
    print("SAUDI HOME EXPERTS — KEYWORD RESEARCH")
    print("=" * 60)
    print("Language: Arabic | Location: Saudi Arabia")
    print("Network: Google Search only")

    client = get_client()
    results = get_keyword_ideas(client, SAUDI_CUSTOMER_ID, SEED_KEYWORDS)

    if results:
        print(f"\n\nTotal keyword ideas returned: {len(results)}")
        high_volume = [r for r in results if r['volume'] >= 100]
        print(f"Keywords with 100+ monthly searches: {len(high_volume)}")
        low_comp = [r for r in results if r['competition'] == 'LOW']
        print(f"Low competition keywords: {len(low_comp)}")


if __name__ == "__main__":
    main()
