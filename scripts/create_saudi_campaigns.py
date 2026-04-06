#!/usr/bin/env python3
"""
Saudi Home Experts — Hyper-Targeted Google Ads Campaign Creator
Account: 241-614-6162 (PKR currency)
MCC: 2554020790 (CruxLabs)

Structure:
  2 campaigns × 14 ad groups = 28 ad groups total
  Each area gets its own ad group with matching landing page
  Same 1,000 PKR/day budget — just spent smarter

  Campaign 1: Electrician (500 PKR/day)
    ├── 12 area ad groups (1 keyword each → area landing page)
    ├── 1 emergency ad group (6 keywords → homepage)
    └── 1 general ad group (3 keywords → /services/)

  Campaign 2: Plumber (500 PKR/day)
    ├── 12 area ad groups (1 keyword each → area landing page)
    ├── 1 emergency ad group (5 keywords → homepage)
    └── 1 general ad group (3 keywords → /services/)
"""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

# ==========================================
# CONFIGURATION
# ==========================================

SAUDI_CUSTOMER_ID = "2416146162"
MCC_CUSTOMER_ID = "2554020790"
CONFIG_PATH = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"
BASE_URL = "https://saudihomeexperts.com"
DAILY_BUDGET_MICROS = 500_000_000  # 500 PKR per campaign

# ==========================================
# AREA DATA — 12 North Riyadh districts
# ==========================================

AREAS = [
    {"slug": "narjis",     "ar": "النرجس",    "en": "Al Narjis"},
    {"slug": "yasmin",     "ar": "الياسمين",   "en": "Al Yasmin"},
    {"slug": "qurtubah",   "ar": "قرطبة",     "en": "Qurtubah"},
    {"slug": "granada",    "ar": "غرناطة",    "en": "Granada"},
    {"slug": "falah",      "ar": "الفلاح",    "en": "Al Falah"},
    {"slug": "nada",       "ar": "الندى",     "en": "Al Nada"},
    {"slug": "rabee",      "ar": "الربيع",    "en": "Al Rabee"},
    {"slug": "ishbiliyah", "ar": "اشبيلية",   "en": "Ishbiliyah"},
    {"slug": "hittin",     "ar": "حطين",     "en": "Hittin"},
    {"slug": "malqa",      "ar": "الملقا",    "en": "Al Malqa"},
    {"slug": "aqiq",       "ar": "العقيق",    "en": "Al Aqiq"},
    {"slug": "qirawan",    "ar": "القيروان",   "en": "Al Qirawan"},
]

# ==========================================
# SERVICE DEFINITIONS
# ==========================================

SERVICES = {
    "electrician": {
        "ar": "كهربائي",
        "slug_ar": "كهربائي",
        "campaign_name": "SHE - كهربائي الرياض (Electrician)",
        "budget_name": "SHE - Electrician Budget",
        "emergency_keywords": [
            "المكيف ما يبرد",
            "الكهرب يفصل",
            "اللمبات ما تشتغل",
            "انقطاع كهرباء الرياض",
            "عطل كهربائي الرياض",
            "تماس كهربائي",
        ],
        "general_keywords": [
            "كهربائي الرياض",
            "فني كهرباء الرياض",
            "صيانة مكيفات الرياض",
        ],
        "headlines": {
            "emergency": [
                "كهربائي طوارئ ٢٤ ساعة",
                "الكهرب فصل؟ نوصلك خلال ساعة",
                "فني كهرباء الرياض الآن",
                "إصلاح فوري — اتصل الحين",
                "ضمان ٣٠ يوم على الشغل",
                "خبرة ٣٠+ سنة عائلية",
                "٠٥٠ ٨٩٠ ١٥٣٦",
                "متوفرين حتى بالليل",
                "نراعي أوقات الصلاة",
                "بدون وسطاء — خدمة مباشرة",
            ],
            "general": [
                "كهربائي الرياض محترف",
                "صيانة مكيفات وفريون",
                "تمديدات كهربائية جديدة",
                "نوصلك خلال ساعة",
                "ضمان ٣٠ يوم",
                "اتصل الآن ٠٥٠٨٩٠١٥٣٦",
                "خبرة ٣٠+ سنة",
                "أسعار عادلة — نتفق قبل البدء",
                "خدمة ٢٤/٧ شمال الرياض",
                "فني أمين ومحترم",
            ],
        },
        "descriptions": {
            "emergency": [
                "الكهرب فصل أو المكيف وقف؟ فني كهرباء يوصلك خلال ساعة. خبرة ٣٠+ سنة. اتصل الحين!",
                "إصلاح أعطال كهربائية فوري في الرياض. نراعي أوقات الصلاة. ضمان ٣٠ يوم. ٠٥٠٨٩٠١٥٣٦",
                "كهربائي طوارئ متوفر الآن. أرسل صورة المشكلة واتساب ونجيك بأسرع وقت.",
            ],
            "general": [
                "كهربائي محترف في الرياض. صيانة مكيفات، تمديدات، إصلاح أعطال. اتصل للتقييم المجاني!",
                "فريق خبرة ٣٠+ سنة. نوصلك خلال ساعة مع ضمان الشغل. أرسل واتساب أو اتصل.",
                "خدمة كهربائي مباشرة بدون وسطاء. أسعار عادلة ونتفق قبل البدء. ٠٥٠٨٩٠١٥٣٦",
            ],
        },
    },
    "plumber": {
        "ar": "سباك",
        "slug_ar": "سباك",
        "campaign_name": "SHE - سباك الرياض (Plumber)",
        "budget_name": "SHE - Plumber Budget",
        "emergency_keywords": [
            "تسريب مياه الرياض",
            "المجاري مسدودة",
            "السخان خربان",
            "المويه تسرب",
            "سباك طوارئ الرياض",
        ],
        "general_keywords": [
            "سباك الرياض",
            "فني سباكة الرياض",
            "تسليك مجاري الرياض",
        ],
        "headlines": {
            "emergency": [
                "سباك طوارئ ٢٤ ساعة",
                "تسريب مياه؟ نوصلك خلال ساعة",
                "سباك الرياض الآن",
                "إصلاح فوري — اتصل الحين",
                "ضمان ٣٠ يوم على الشغل",
                "خبرة ٣٠+ سنة عائلية",
                "٠٥٠ ٨٩٠ ١٥٣٦",
                "المجاري مسدودة؟ نحلها اليوم",
                "نراعي أوقات الصلاة",
                "بدون وسطاء — خدمة مباشرة",
            ],
            "general": [
                "سباك الرياض محترف",
                "إصلاح تسريبات المياه",
                "تسليك مجاري مسدودة",
                "نوصلك خلال ساعة",
                "ضمان ٣٠ يوم",
                "اتصل الآن ٠٥٠٨٩٠١٥٣٦",
                "خبرة ٣٠+ سنة",
                "أسعار عادلة — نتفق قبل البدء",
                "صيانة سخانات وخلاطات",
                "سباك أمين ومحترم",
            ],
        },
        "descriptions": {
            "emergency": [
                "تسريب مياه أو مجاري مسدودة؟ سباك يوصلك خلال ساعة. خبرة ٣٠+ سنة. اتصل الحين!",
                "إصلاح تسريبات فوري في الرياض. نراعي أوقات الصلاة. ضمان ٣٠ يوم. ٠٥٠٨٩٠١٥٣٦",
                "سباك طوارئ متوفر الآن. أرسل صورة المشكلة واتساب ونجيك بأسرع وقت.",
            ],
            "general": [
                "سباك محترف في الرياض. تسريبات، مجاري، سخانات، خلاطات. اتصل للتقييم المجاني!",
                "فريق خبرة ٣٠+ سنة في السباكة. نوصلك خلال ساعة مع ضمان الشغل. ٠٥٠٨٩٠١٥٣٦",
                "خدمة سباكة مباشرة بدون وسطاء. أسعار عادلة ونتفق قبل البدء.",
            ],
        },
    },
}

# ==========================================
# NEGATIVE KEYWORDS — shared across campaigns
# ==========================================

NEGATIVE_KEYWORDS = [
    # Job seekers
    "وظيفة", "وظائف", "توظيف", "راتب", "رواتب",
    "تدريب", "دورة", "دورات", "شهادة", "تعلم", "كيف تصبح",
    # DIY / information
    "بنفسك", "يوتيوب", "فيديو", "شرح", "كتاب", "مقال",
    # Wrong cities
    "جدة", "مكة", "المدينة", "الدمام", "الخبر",
    "أبها", "تبوك", "حائل", "نجران", "جيزان",
    "الجبيل", "ينبع", "الطائف", "بريدة", "سكاكا",
    "الأحساء", "الخرج",
    # Competitor / company seekers
    "شركة", "مؤسسة", "مقاولات",
    # Cheap / free
    "مجاني", "مجانا", "أرخص", "رخيص",
    # English noise
    "job", "salary", "career", "training", "course", "DIY", "free", "cheap",
]


# ==========================================
# API HELPER FUNCTIONS
# ==========================================

def get_client():
    client = GoogleAdsClient.load_from_storage(CONFIG_PATH)
    client.login_customer_id = MCC_CUSTOMER_ID
    return client


def create_budget(client, customer_id, name, amount_micros):
    service = client.get_service("CampaignBudgetService")
    op = client.get_type("CampaignBudgetOperation")
    budget = op.create
    budget.name = name
    budget.amount_micros = amount_micros
    budget.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD

    resp = service.mutate_campaign_budgets(customer_id=customer_id, operations=[op])
    resource = resp.results[0].resource_name
    print(f"  ✅ Budget: {name} ({amount_micros // 1_000_000} PKR/day)")
    return resource


def create_campaign(client, customer_id, name, budget_resource):
    service = client.get_service("CampaignService")
    op = client.get_type("CampaignOperation")
    campaign = op.create
    campaign.name = name
    campaign.campaign_budget = budget_resource
    campaign.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    campaign.status = client.enums.CampaignStatusEnum.PAUSED
    campaign.manual_cpc.enhanced_cpc_enabled = True
    campaign.network_settings.target_google_search = True
    campaign.network_settings.target_search_network = False
    campaign.network_settings.target_content_network = False

    resp = service.mutate_campaigns(customer_id=customer_id, operations=[op])
    resource = resp.results[0].resource_name
    print(f"  ✅ Campaign: {name} (PAUSED)")
    return resource


def create_ad_group(client, customer_id, campaign_resource, name, cpc_micros):
    service = client.get_service("AdGroupService")
    op = client.get_type("AdGroupOperation")
    ag = op.create
    ag.name = name
    ag.campaign = campaign_resource
    ag.type_ = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
    ag.cpc_bid_micros = cpc_micros
    ag.status = client.enums.AdGroupStatusEnum.ENABLED

    resp = service.mutate_ad_groups(customer_id=customer_id, operations=[op])
    resource = resp.results[0].resource_name
    print(f"    ✅ Ad Group: {name} (CPC: {cpc_micros // 1_000_000} PKR)")
    return resource


def add_keywords(client, customer_id, ag_resource, keywords, match_type="PHRASE"):
    service = client.get_service("AdGroupCriterionService")
    match_map = {
        "PHRASE": client.enums.KeywordMatchTypeEnum.PHRASE,
        "EXACT": client.enums.KeywordMatchTypeEnum.EXACT,
        "BROAD": client.enums.KeywordMatchTypeEnum.BROAD,
    }
    ops = []
    for kw in keywords:
        op = client.get_type("AdGroupCriterionOperation")
        criterion = op.create
        criterion.ad_group = ag_resource
        criterion.keyword.text = kw
        criterion.keyword.match_type = match_map[match_type]
        ops.append(op)

    resp = service.mutate_ad_group_criteria(customer_id=customer_id, operations=ops)
    print(f"      + {len(resp.results)} keywords ({match_type})")


def add_negative_keywords(client, customer_id, campaign_resource, negatives):
    service = client.get_service("CampaignCriterionService")
    ops = []
    for kw in negatives:
        op = client.get_type("CampaignCriterionOperation")
        criterion = op.create
        criterion.campaign = campaign_resource
        criterion.negative = True
        criterion.keyword.text = kw
        criterion.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
        ops.append(op)

    resp = service.mutate_campaign_criteria(customer_id=customer_id, operations=ops)
    print(f"  ✅ {len(resp.results)} negative keywords added")


def create_rsa(client, customer_id, ag_resource, headlines, descriptions, final_url, path1, path2):
    service = client.get_service("AdGroupAdService")
    op = client.get_type("AdGroupAdOperation")
    ad_group_ad = op.create
    ad_group_ad.ad_group = ag_resource
    ad_group_ad.status = client.enums.AdGroupAdStatusEnum.ENABLED

    ad = ad_group_ad.ad
    ad.final_urls.append(final_url)

    for h in headlines:
        asset = client.get_type("AdTextAsset")
        asset.text = h
        ad.responsive_search_ad.headlines.append(asset)

    for d in descriptions:
        asset = client.get_type("AdTextAsset")
        asset.text = d
        ad.responsive_search_ad.descriptions.append(asset)

    ad.responsive_search_ad.path1 = path1
    ad.responsive_search_ad.path2 = path2

    service.mutate_ad_group_ads(customer_id=customer_id, operations=[op])
    print(f"      + RSA created → {final_url}")


# ==========================================
# MAIN BUILDER
# ==========================================

def build_service_campaign(client, service_key):
    """Build a full campaign for one service type."""
    svc = SERVICES[service_key]
    print(f"\n{'='*60}")
    print(f"📦 BUILDING: {svc['campaign_name']}")
    print(f"{'='*60}")

    # Budget + Campaign
    budget = create_budget(client, SAUDI_CUSTOMER_ID, svc["budget_name"], DAILY_BUDGET_MICROS)
    campaign = create_campaign(client, SAUDI_CUSTOMER_ID, svc["campaign_name"], budget)

    # Negative keywords
    add_negative_keywords(client, SAUDI_CUSTOMER_ID, campaign, NEGATIVE_KEYWORDS)

    # ---- AD GROUP: Emergency ----
    print(f"\n  🚨 Emergency Ad Group")
    ag_emg = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign,
                              f"{svc['ar']} طوارئ (Emergency)", 50_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag_emg, svc["emergency_keywords"], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag_emg,
               svc["headlines"]["emergency"], svc["descriptions"]["emergency"],
               f"{BASE_URL}/", svc["ar"], "طوارئ")

    # ---- AD GROUP: General ----
    print(f"\n  🔧 General Ad Group")
    ag_gen = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign,
                              f"{svc['ar']} عام (General)", 20_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag_gen, svc["general_keywords"], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag_gen,
               svc["headlines"]["general"], svc["descriptions"]["general"],
               f"{BASE_URL}/services/", svc["ar"], "الرياض")

    # ---- AD GROUPS: 12 Areas (one each) ----
    print(f"\n  📍 Area Ad Groups (12 districts)")
    for area in AREAS:
        area_name = area["ar"]
        slug = area["slug"]
        landing_page = f"{BASE_URL}/{svc['slug_ar']}-{slug}/"

        ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign,
                              f"{svc['ar']} {area_name}", 30_000_000)

        # 2 keyword variations per area
        keywords = [
            f"{svc['ar']} {area_name}",                  # كهربائي النرجس
            f"{svc['ar']} حي {area_name}",               # كهربائي حي النرجس
        ]
        add_keywords(client, SAUDI_CUSTOMER_ID, ag, keywords, "PHRASE")

        # Area-specific ad — headlines mention the area name
        area_headlines = [
            f"{svc['ar']} {area_name} — خلال ساعة",      # Electrician Narjis — within 1 hour
            f"نوصلك {area_name} بأسرع وقت",             # We reach Narjis fastest
            f"{svc['ar']} محترف في {area_name}",          # Professional electrician in Narjis
            f"خبرة ٣٠+ سنة في {area_name}",             # 30+ years experience in Narjis
            f"ضمان ٣٠ يوم",                              # 30-day warranty
            f"اتصل الآن ٠٥٠٨٩٠١٥٣٦",                   # Call now
            f"متوفر الآن في {area_name}",                 # Available now in Narjis
            f"خدمة مباشرة بدون وسطاء",                   # Direct service no middlemen
            f"نراعي أوقات الصلاة",                        # Prayer-time aware
            f"أرسل صورة المشكلة واتساب",                  # Send problem photo WhatsApp
        ]

        area_descriptions = [
            f"{svc['ar']} محترف في {area_name} الرياض. نوصلك خلال ساعة مع ضمان ٣٠ يوم. اتصل الآن!",
            f"خبرة عائلية ٣٠+ سنة في خدمة بيوت {area_name}. خدمة مباشرة، أسعار عادلة. ٠٥٠٨٩٠١٥٣٦",
            f"أرسل صورة المشكلة واتساب ونعطيك تقييم مجاني. متوفرين ٢٤/٧ في {area_name}.",
        ]

        create_rsa(client, SAUDI_CUSTOMER_ID, ag,
                   area_headlines, area_descriptions,
                   landing_page, svc["ar"], area_name)

    return campaign


def main():
    print("\n" + "=" * 60)
    print("🏗️  SAUDI HOME EXPERTS — HYPER-TARGETED CAMPAIGN BUILDER")
    print("=" * 60)

    try:
        client = get_client()

        # Build both campaigns
        elec_campaign = build_service_campaign(client, "electrician")
        plumb_campaign = build_service_campaign(client, "plumber")

        # Final summary
        total_ad_groups = 14 * 2  # 14 per campaign × 2 campaigns
        total_keywords = (len(SERVICES["electrician"]["emergency_keywords"])
                         + len(SERVICES["electrician"]["general_keywords"])
                         + len(AREAS) * 2  # 2 keywords per area
                         + len(SERVICES["plumber"]["emergency_keywords"])
                         + len(SERVICES["plumber"]["general_keywords"])
                         + len(AREAS) * 2)

        print(f"""
{'='*60}
✅ ALL CAMPAIGNS CREATED SUCCESSFULLY
{'='*60}

📊 Final Structure:
   Campaigns:     2 (Electrician + Plumber)
   Ad Groups:     {total_ad_groups} (14 per campaign)
   Ads:           {total_ad_groups} (1 RSA per ad group)
   Keywords:      {total_keywords} (area-specific + emergency + general)
   Negatives:     {len(NEGATIVE_KEYWORDS)} per campaign

💰 Budget:
   Electrician:   500 PKR/day (~6.5 SAR)
   Plumber:       500 PKR/day (~6.5 SAR)
   Total:         1,000 PKR/day (~13 SAR)

🎯 CPC Strategy:
   Emergency:     50 PKR max (~0.65 SAR) — highest conversion
   Area-specific: 30 PKR max (~0.40 SAR) — best quality score
   General:       20 PKR max (~0.26 SAR) — volume play

📍 Landing Pages:
   Emergency ads    → {BASE_URL}/
   General ads      → {BASE_URL}/services/
   Area ads (×24)   → {BASE_URL}/كهربائي-narjis/ (etc.)

⚠️  CAMPAIGNS ARE PAUSED — Next steps:
   1. Go to Google Ads console → Review all ads
   2. Create conversion actions: phone_call + whatsapp_click
   3. Set location targeting: North Riyadh radius
   4. Add call extension: +966 50 890 1536
   5. Enable campaigns when ready
   6. Monitor 3-5 days → pause low-performing ad groups
   7. Scale budget to 2,000 PKR when ROI is proven
""")

    except GoogleAdsException as ex:
        print(f"\n❌ Google Ads API Error:")
        for error in ex.failure.errors:
            print(f"  {error.message}")
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()
