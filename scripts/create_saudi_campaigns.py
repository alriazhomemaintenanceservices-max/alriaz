#!/usr/bin/env python3
"""
Saudi Home Experts — Google Ads Campaign Creator
Account: 241-614-6162 (PKR currency)
MCC: 2554020790 (CruxLabs)

Strategy:
- 2 campaigns: Electrician + Plumber (highest emergency demand)
- Arabic keywords only (3-5x cheaper than English)
- Search ads + Call extensions
- Targeting: North Riyadh (12 specific areas)
- Budget: 500 PKR/day each = 1,000 PKR total (~13 SAR/day)
- Negative keywords to avoid wasted spend
"""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException
import sys

# Account details
SAUDI_CUSTOMER_ID = "2416146162"
MCC_CUSTOMER_ID = "2554020790"
CONFIG_PATH = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"

# Budget in PKR micros (500 PKR = 500,000,000 micros)
DAILY_BUDGET_MICROS = 500_000_000  # 500 PKR per campaign

# ==========================================
# KEYWORD STRATEGY
# ==========================================

ELECTRICIAN_KEYWORDS = [
    # High intent - service + city
    "كهربائي الرياض",           # electrician riyadh
    "فني كهرباء الرياض",        # electrical technician riyadh
    "كهربائي منازل الرياض",     # home electrician riyadh

    # Emergency / problem keywords
    "المكيف ما يبرد",           # AC not cooling
    "الكهرب يفصل",             # power keeps cutting
    "اللمبات ما تشتغل",        # lights not working
    "انقطاع كهرباء",           # power outage
    "عطل كهربائي",             # electrical fault
    "تماس كهربائي",            # short circuit
    "صيانة مكيفات الرياض",     # AC maintenance riyadh
    "تعبئة فريون",             # freon refill

    # Area-specific (highest value)
    "كهربائي النرجس",           # electrician narjis
    "كهربائي الياسمين",         # electrician yasmin
    "كهربائي حطين",            # electrician hittin
    "كهربائي الملقا",           # electrician malqa
    "كهربائي قرطبة",           # electrician qurtubah
    "كهربائي غرناطة",          # electrician granada
    "كهربائي الفلاح",           # electrician falah
    "كهربائي الندى",            # electrician nada
    "كهربائي الربيع",           # electrician rabee
    "كهربائي اشبيلية",          # electrician ishbiliyah
    "كهربائي العقيق",           # electrician aqiq
    "كهربائي القيروان",         # electrician qirawan
]

PLUMBER_KEYWORDS = [
    # High intent - service + city
    "سباك الرياض",              # plumber riyadh
    "فني سباكة الرياض",         # plumbing technician riyadh
    "سباك منازل الرياض",        # home plumber riyadh

    # Emergency / problem keywords
    "تسريب مياه",              # water leak
    "المجاري مسدودة",          # drain blocked
    "السخان خربان",            # heater broken
    "تسريب السقف",             # ceiling leak
    "المويه تسرب",             # water leaking
    "سباك طوارئ الرياض",       # emergency plumber riyadh
    "تسليك مجاري",             # drain cleaning
    "صيانة سخانات",            # heater maintenance

    # Area-specific
    "سباك النرجس",              # plumber narjis
    "سباك الياسمين",            # plumber yasmin
    "سباك حطين",               # plumber hittin
    "سباك الملقا",              # plumber malqa
    "سباك قرطبة",              # plumber qurtubah
    "سباك غرناطة",             # plumber granada
    "سباك الفلاح",              # plumber falah
    "سباك الندى",               # plumber nada
    "سباك الربيع",              # plumber rabee
    "سباك اشبيلية",             # plumber ishbiliyah
    "سباك العقيق",              # plumber aqiq
    "سباك القيروان",            # plumber qirawan
]

# Negative keywords — prevent wasted clicks
NEGATIVE_KEYWORDS = [
    # Job seekers (NOT customers)
    "وظيفة",                   # job
    "وظائف",                   # jobs
    "توظيف",                   # hiring
    "راتب",                    # salary
    "رواتب",                   # salaries
    "تدريب",                   # training
    "دورة",                    # course
    "دورات",                   # courses
    "شهادة",                   # certificate
    "تعلم",                    # learn
    "كيف تصبح",                # how to become

    # DIY / information seekers
    "بنفسك",                   # yourself / DIY
    "يوتيوب",                  # youtube
    "فيديو",                   # video
    "شرح",                     # explanation
    "كتاب",                    # book
    "مقال",                    # article

    # Wrong locations
    "جدة",                     # jeddah
    "مكة",                     # mecca
    "المدينة",                  # medina
    "الدمام",                   # dammam
    "الخبر",                   # khobar
    "أبها",                    # abha
    "تبوك",                    # tabuk
    "حائل",                    # hail
    "نجران",                   # najran
    "جيزان",                   # jizan

    # Competitors / brands
    "شركة",                    # company (looking for a company, not individual)
    "مؤسسة",                   # establishment
    "مقاولات",                  # contracting

    # Free / cheap seekers
    "مجاني",                   # free
    "مجانا",                   # free
    "أرخص",                    # cheapest
    "رخيص",                    # cheap

    # English noise
    "job",
    "salary",
    "career",
    "training",
    "course",
    "DIY",
    "free",
]

# ==========================================
# CAMPAIGN CREATION FUNCTIONS
# ==========================================

def get_client():
    client = GoogleAdsClient.load_from_storage(CONFIG_PATH)
    client.login_customer_id = MCC_CUSTOMER_ID
    return client


def create_budget(client, customer_id, name, amount_micros):
    """Create a campaign budget."""
    budget_service = client.get_service("CampaignBudgetService")
    budget_op = client.get_type("CampaignBudgetOperation")
    budget = budget_op.create

    budget.name = name
    budget.amount_micros = amount_micros
    budget.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD

    response = budget_service.mutate_campaign_budgets(
        customer_id=customer_id, operations=[budget_op]
    )
    budget_resource = response.results[0].resource_name
    print(f"  ✅ Budget created: {name} ({amount_micros / 1_000_000:.0f} PKR/day)")
    return budget_resource


def create_campaign(client, customer_id, name, budget_resource):
    """Create a search campaign."""
    campaign_service = client.get_service("CampaignService")
    campaign_op = client.get_type("CampaignOperation")
    campaign = campaign_op.create

    campaign.name = name
    campaign.campaign_budget = budget_resource
    campaign.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    campaign.status = client.enums.CampaignStatusEnum.PAUSED  # Start paused for review

    # Manual CPC for budget control
    campaign.manual_cpc.enhanced_cpc_enabled = True

    # Network settings — search only, no display
    campaign.network_settings.target_google_search = True
    campaign.network_settings.target_search_network = False
    campaign.network_settings.target_content_network = False

    response = campaign_service.mutate_campaigns(
        customer_id=customer_id, operations=[campaign_op]
    )
    campaign_resource = response.results[0].resource_name
    print(f"  ✅ Campaign created: {name} (PAUSED — review before enabling)")
    return campaign_resource


def create_ad_group(client, customer_id, campaign_resource, name, cpc_micros):
    """Create an ad group."""
    ad_group_service = client.get_service("AdGroupService")
    ad_group_op = client.get_type("AdGroupOperation")
    ad_group = ad_group_op.create

    ad_group.name = name
    ad_group.campaign = campaign_resource
    ad_group.type_ = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
    ad_group.cpc_bid_micros = cpc_micros
    ad_group.status = client.enums.AdGroupStatusEnum.ENABLED

    response = ad_group_service.mutate_ad_groups(
        customer_id=customer_id, operations=[ad_group_op]
    )
    ad_group_resource = response.results[0].resource_name
    print(f"  ✅ Ad group created: {name} (CPC: {cpc_micros / 1_000_000:.2f} PKR)")
    return ad_group_resource


def add_keywords(client, customer_id, ad_group_resource, keywords, match_type="PHRASE"):
    """Add keywords to an ad group."""
    keyword_service = client.get_service("AdGroupCriterionService")
    operations = []

    match_enum = client.enums.KeywordMatchTypeEnum.PHRASE
    if match_type == "EXACT":
        match_enum = client.enums.KeywordMatchTypeEnum.EXACT
    elif match_type == "BROAD":
        match_enum = client.enums.KeywordMatchTypeEnum.BROAD

    for kw in keywords:
        op = client.get_type("AdGroupCriterionOperation")
        criterion = op.create
        criterion.ad_group = ad_group_resource
        criterion.keyword.text = kw
        criterion.keyword.match_type = match_enum
        operations.append(op)

    response = keyword_service.mutate_ad_group_criteria(
        customer_id=customer_id, operations=operations
    )
    print(f"  ✅ Added {len(response.results)} {match_type} keywords")


def add_negative_keywords(client, customer_id, campaign_resource, negatives):
    """Add negative keywords at campaign level."""
    criterion_service = client.get_service("CampaignCriterionService")
    operations = []

    for kw in negatives:
        op = client.get_type("CampaignCriterionOperation")
        criterion = op.create
        criterion.campaign = campaign_resource
        criterion.negative = True
        criterion.keyword.text = kw
        criterion.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
        operations.append(op)

    response = criterion_service.mutate_campaign_criteria(
        customer_id=customer_id, operations=operations
    )
    print(f"  ✅ Added {len(response.results)} negative keywords")


def create_responsive_search_ad(client, customer_id, ad_group_resource, headlines, descriptions, final_url, path1, path2):
    """Create a responsive search ad."""
    ad_group_ad_service = client.get_service("AdGroupAdService")
    op = client.get_type("AdGroupAdOperation")
    ad_group_ad = op.create
    ad_group_ad.ad_group = ad_group_resource
    ad_group_ad.status = client.enums.AdGroupAdStatusEnum.ENABLED

    ad = ad_group_ad.ad
    ad.final_urls.append(final_url)

    # Add headlines (max 15)
    for h in headlines:
        headline = client.get_type("AdTextAsset")
        headline.text = h
        ad.responsive_search_ad.headlines.append(headline)

    # Add descriptions (max 4)
    for d in descriptions:
        desc = client.get_type("AdTextAsset")
        desc.text = d
        ad.responsive_search_ad.descriptions.append(desc)

    ad.responsive_search_ad.path1 = path1
    ad.responsive_search_ad.path2 = path2

    response = ad_group_ad_service.mutate_ad_group_ads(
        customer_id=customer_id, operations=[op]
    )
    print(f"  ✅ Responsive search ad created ({len(headlines)} headlines, {len(descriptions)} descriptions)")


# ==========================================
# MAIN — BUILD BOTH CAMPAIGNS
# ==========================================

def main():
    print("\n" + "=" * 60)
    print("SAUDI HOME EXPERTS — GOOGLE ADS CAMPAIGN BUILDER")
    print("=" * 60)

    client = get_client()

    # ---- CAMPAIGN 1: ELECTRICIAN ----
    print("\n📦 CAMPAIGN 1: Electrician (كهربائي)")
    print("-" * 40)

    elec_budget = create_budget(client, SAUDI_CUSTOMER_ID, "SHE - Electrician Budget", DAILY_BUDGET_MICROS)
    elec_campaign = create_campaign(client, SAUDI_CUSTOMER_ID, "SHE - كهربائي الرياض (Electrician Riyadh)", elec_budget)

    # Ad Group — Emergency keywords (high CPC bid: 50 PKR ≈ 0.65 SAR)
    elec_emergency = create_ad_group(client, SAUDI_CUSTOMER_ID, elec_campaign, "كهربائي طوارئ (Emergency)", 50_000_000)
    emergency_kws = [kw for kw in ELECTRICIAN_KEYWORDS if any(w in kw for w in ["يفصل", "يبرد", "تشتغل", "انقطاع", "عطل", "تماس"])]
    add_keywords(client, SAUDI_CUSTOMER_ID, elec_emergency, emergency_kws, "PHRASE")

    # Ad Group — Area keywords (medium CPC bid: 30 PKR ≈ 0.40 SAR)
    elec_areas = create_ad_group(client, SAUDI_CUSTOMER_ID, elec_campaign, "كهربائي حسب المنطقة (By Area)", 30_000_000)
    area_kws = [kw for kw in ELECTRICIAN_KEYWORDS if any(w in kw for w in ["النرجس", "الياسمين", "حطين", "الملقا", "قرطبة", "غرناطة", "الفلاح", "الندى", "الربيع", "اشبيلية", "العقيق", "القيروان"])]
    add_keywords(client, SAUDI_CUSTOMER_ID, elec_areas, area_kws, "PHRASE")

    # Ad Group — General service keywords (lower CPC: 20 PKR)
    elec_general = create_ad_group(client, SAUDI_CUSTOMER_ID, elec_campaign, "كهربائي عام (General)", 20_000_000)
    general_kws = [kw for kw in ELECTRICIAN_KEYWORDS if kw not in emergency_kws and kw not in area_kws]
    add_keywords(client, SAUDI_CUSTOMER_ID, elec_general, general_kws, "PHRASE")

    # Negative keywords
    add_negative_keywords(client, SAUDI_CUSTOMER_ID, elec_campaign, NEGATIVE_KEYWORDS)

    # Ads for each ad group
    elec_headlines_ar = [
        "كهربائي الرياض ٢٤ ساعة",        # Electrician Riyadh 24h
        "نوصلك خلال ساعة",               # We reach you in 1 hour
        "ضمان ٣٠ يوم",                   # 30-day warranty
        "فني كهرباء محترف",              # Professional electrician
        "خبرة ٣٠+ سنة",                 # 30+ years experience
        "اتصل الآن ٠٥٠٨٩٠١٥٣٦",        # Call now
        "صيانة مكيفات وفريون",           # AC maintenance and freon
        "إصلاح أعطال الكهرباء",           # Electrical fault repair
        "كهربائي شمال الرياض",            # Electrician north riyadh
        "خدمة فورية نفس اليوم",           # Same day instant service
    ]

    elec_descriptions_ar = [
        "كهربائي محترف في الرياض. نوصلك خلال ساعة مع ضمان ٣٠ يوم. اتصل الآن!",
        "فريق خبرة ٣٠+ سنة في صيانة الكهرباء والمكيفات. خدمة ٢٤/٧ في جميع أحياء شمال الرياض.",
        "إصلاح أعطال، صيانة مكيفات، تمديدات كهربائية. اتصل أو أرسل واتساب ٠٥٠٨٩٠١٥٣٦",
    ]

    for ag in [elec_emergency, elec_areas, elec_general]:
        create_responsive_search_ad(
            client, SAUDI_CUSTOMER_ID, ag,
            elec_headlines_ar, elec_descriptions_ar,
            "https://saudihomeexperts.com/",
            "كهربائي", "الرياض"
        )

    # ---- CAMPAIGN 2: PLUMBER ----
    print("\n📦 CAMPAIGN 2: Plumber (سباك)")
    print("-" * 40)

    plumb_budget = create_budget(client, SAUDI_CUSTOMER_ID, "SHE - Plumber Budget", DAILY_BUDGET_MICROS)
    plumb_campaign = create_campaign(client, SAUDI_CUSTOMER_ID, "SHE - سباك الرياض (Plumber Riyadh)", plumb_budget)

    # Ad Group — Emergency
    plumb_emergency = create_ad_group(client, SAUDI_CUSTOMER_ID, plumb_campaign, "سباك طوارئ (Emergency)", 50_000_000)
    plumb_emg_kws = [kw for kw in PLUMBER_KEYWORDS if any(w in kw for w in ["تسريب", "مسدودة", "خربان", "تسرب", "طوارئ"])]
    add_keywords(client, SAUDI_CUSTOMER_ID, plumb_emergency, plumb_emg_kws, "PHRASE")

    # Ad Group — Area keywords
    plumb_areas = create_ad_group(client, SAUDI_CUSTOMER_ID, plumb_campaign, "سباك حسب المنطقة (By Area)", 30_000_000)
    plumb_area_kws = [kw for kw in PLUMBER_KEYWORDS if any(w in kw for w in ["النرجس", "الياسمين", "حطين", "الملقا", "قرطبة", "غرناطة", "الفلاح", "الندى", "الربيع", "اشبيلية", "العقيق", "القيروان"])]
    add_keywords(client, SAUDI_CUSTOMER_ID, plumb_areas, plumb_area_kws, "PHRASE")

    # Ad Group — General
    plumb_general = create_ad_group(client, SAUDI_CUSTOMER_ID, plumb_campaign, "سباك عام (General)", 20_000_000)
    plumb_gen_kws = [kw for kw in PLUMBER_KEYWORDS if kw not in plumb_emg_kws and kw not in plumb_area_kws]
    add_keywords(client, SAUDI_CUSTOMER_ID, plumb_general, plumb_gen_kws, "PHRASE")

    # Negative keywords
    add_negative_keywords(client, SAUDI_CUSTOMER_ID, plumb_campaign, NEGATIVE_KEYWORDS)

    # Ads
    plumb_headlines_ar = [
        "سباك الرياض ٢٤ ساعة",           # Plumber Riyadh 24h
        "نوصلك خلال ساعة",               # We reach you in 1 hour
        "ضمان ٣٠ يوم",                   # 30-day warranty
        "سباك محترف وأمين",              # Professional trusted plumber
        "خبرة ٣٠+ سنة",                 # 30+ years experience
        "اتصل الآن ٠٥٠٨٩٠١٥٣٦",        # Call now
        "إصلاح تسريبات المياه",           # Water leak repair
        "تسليك مجاري مسدودة",            # Blocked drain cleaning
        "سباك شمال الرياض",              # Plumber north riyadh
        "خدمة طوارئ فورية",              # Instant emergency service
    ]

    plumb_descriptions_ar = [
        "سباك محترف في الرياض. نوصلك خلال ساعة مع ضمان ٣٠ يوم. اتصل الآن!",
        "فريق خبرة ٣٠+ سنة في السباكة. تسريبات، مجاري، سخانات، خلاطات. خدمة ٢٤/٧.",
        "إصلاح تسريبات، تسليك مجاري، صيانة سخانات. اتصل أو واتساب ٠٥٠٨٩٠١٥٣٦",
    ]

    for ag in [plumb_emergency, plumb_areas, plumb_general]:
        create_responsive_search_ad(
            client, SAUDI_CUSTOMER_ID, ag,
            plumb_headlines_ar, plumb_descriptions_ar,
            "https://saudihomeexperts.com/",
            "سباك", "الرياض"
        )

    # ---- SUMMARY ----
    print("\n" + "=" * 60)
    print("✅ CAMPAIGN SETUP COMPLETE")
    print("=" * 60)
    print(f"""
📊 Summary:
   • 2 campaigns created (PAUSED — review before enabling)
   • 6 ad groups (3 per campaign: Emergency, By Area, General)
   • {len(ELECTRICIAN_KEYWORDS)} electrician keywords
   • {len(PLUMBER_KEYWORDS)} plumber keywords
   • {len(NEGATIVE_KEYWORDS)} negative keywords per campaign
   • Daily budget: 500 PKR per campaign = 1,000 PKR total

🎯 CPC Bidding Strategy:
   • Emergency keywords: 50 PKR max CPC (~0.65 SAR)
   • Area keywords: 30 PKR max CPC (~0.40 SAR)
   • General keywords: 20 PKR max CPC (~0.26 SAR)

⚠️  NEXT STEPS:
   1. Review campaigns in Google Ads console
   2. Create conversion actions (phone_call, whatsapp_click)
   3. Set location targeting to North Riyadh
   4. Add call extensions with phone number
   5. Enable campaigns when ready to go live
   6. Monitor for 3-5 days, then optimize
""")


if __name__ == "__main__":
    main()
