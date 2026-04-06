#!/usr/bin/env python3
"""
Saudi Home Experts — Production Google Ads Campaign Builder
============================================================
Account: 241-614-6162 (PKR currency)
MCC: 2554020790 (CruxLabs)

3 Campaigns:
  1. Electrician Arabic (350 PKR/day) — 14 ad groups
  2. Plumber Arabic (350 PKR/day) — 14 ad groups
  3. English Combined (300 PKR/day) — 4 ad groups
Total: 1,000 PKR/day

All campaigns, ad groups, and extensions named in English.
Keywords based on real Google Keyword Planner data (Apr 2026).
"""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

# ==========================================
# CONFIG
# ==========================================

SAUDI_CUSTOMER_ID = "2416146162"
MCC_CUSTOMER_ID = "2554020790"
CONFIG_PATH = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"
BASE_URL = "https://saudihomeexperts.com"
PHONE = "+966508901536"

# Budgets in PKR micros
BUDGET_AR_ELEC = 350_000_000   # 350 PKR/day
BUDGET_AR_PLUMB = 350_000_000  # 350 PKR/day
BUDGET_EN = 300_000_000        # 300 PKR/day

# ==========================================
# 12 NORTH RIYADH AREAS
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
# NEGATIVE KEYWORDS — shared across all campaigns
# ==========================================

NEGATIVE_KEYWORDS_AR = [
    "وظيفة", "وظائف", "توظيف", "راتب", "رواتب",
    "تدريب", "دورة", "دورات", "شهادة", "تعلم", "كيف تصبح",
    "بنفسك", "يوتيوب", "فيديو", "شرح", "كتاب", "مقال",
    "جدة", "مكة", "المدينة", "الدمام", "الخبر",
    "أبها", "تبوك", "حائل", "نجران", "جيزان",
    "الجبيل", "ينبع", "الطائف", "بريدة", "سكاكا", "الأحساء", "الخرج",
    "شركة", "مؤسسة", "مقاولات",
    "مجاني", "مجانا", "أرخص", "رخيص",
    "سيارات", "سيارة",  # car electrician — 4400 searches, NOT us
    "كشف تسربات",  # leak detection companies
    "شركات تنظيف",  # cleaning companies
    "بالجملة",  # wholesale
    "قطع غيار",  # spare parts
    "وكيل",  # dealer/agent
]

NEGATIVE_KEYWORDS_EN = [
    "job", "jobs", "salary", "career", "hiring", "vacancy",
    "training", "course", "certificate", "how to become",
    "DIY", "youtube", "video", "tutorial",
    "jeddah", "mecca", "medina", "dammam", "khobar",
    "free", "cheap", "cheapest",
    "car electrician", "auto electrician",
    "company", "contractor", "contracting",
    "wholesale", "spare parts", "dealer",
]


# ==========================================
# API HELPERS
# ==========================================

def get_client():
    client = GoogleAdsClient.load_from_storage(CONFIG_PATH)
    client.login_customer_id = MCC_CUSTOMER_ID
    return client


def create_budget(client, cid, name, micros):
    svc = client.get_service("CampaignBudgetService")
    op = client.get_type("CampaignBudgetOperation")
    b = op.create
    b.name = name
    b.amount_micros = micros
    b.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD
    resp = svc.mutate_campaign_budgets(customer_id=cid, operations=[op])
    r = resp.results[0].resource_name
    print(f"  ✅ Budget: {name} ({micros // 1_000_000} PKR/day)")
    return r


def create_campaign(client, cid, name, budget_resource):
    svc = client.get_service("CampaignService")
    op = client.get_type("CampaignOperation")
    c = op.create
    c.name = name
    c.campaign_budget = budget_resource
    c.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    c.status = client.enums.CampaignStatusEnum.PAUSED
    c.manual_cpc.enhanced_cpc_enabled = True
    c.network_settings.target_google_search = True
    c.network_settings.target_search_network = False
    c.network_settings.target_content_network = False
    resp = svc.mutate_campaigns(customer_id=cid, operations=[op])
    r = resp.results[0].resource_name
    print(f"  ✅ Campaign: {name} (PAUSED)")
    return r


def create_ad_group(client, cid, campaign_r, name, cpc_micros):
    svc = client.get_service("AdGroupService")
    op = client.get_type("AdGroupOperation")
    ag = op.create
    ag.name = name
    ag.campaign = campaign_r
    ag.type_ = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
    ag.cpc_bid_micros = cpc_micros
    ag.status = client.enums.AdGroupStatusEnum.ENABLED
    resp = svc.mutate_ad_groups(customer_id=cid, operations=[op])
    r = resp.results[0].resource_name
    print(f"    ✅ AG: {name} (CPC: {cpc_micros // 1_000_000} PKR)")
    return r


def add_keywords(client, cid, ag_r, keywords, match="PHRASE"):
    svc = client.get_service("AdGroupCriterionService")
    m = {"PHRASE": client.enums.KeywordMatchTypeEnum.PHRASE,
         "EXACT": client.enums.KeywordMatchTypeEnum.EXACT,
         "BROAD": client.enums.KeywordMatchTypeEnum.BROAD}
    ops = []
    for kw in keywords:
        op = client.get_type("AdGroupCriterionOperation")
        cr = op.create
        cr.ad_group = ag_r
        cr.keyword.text = kw
        cr.keyword.match_type = m[match]
        ops.append(op)
    resp = svc.mutate_ad_group_criteria(customer_id=cid, operations=ops)
    print(f"      + {len(resp.results)} keywords ({match})")


def add_negatives(client, cid, campaign_r, keywords):
    svc = client.get_service("CampaignCriterionService")
    ops = []
    for kw in keywords:
        op = client.get_type("CampaignCriterionOperation")
        cr = op.create
        cr.campaign = campaign_r
        cr.negative = True
        cr.keyword.text = kw
        cr.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
        ops.append(op)
    resp = svc.mutate_campaign_criteria(customer_id=cid, operations=ops)
    print(f"  ✅ {len(resp.results)} negative keywords")


def create_rsa(client, cid, ag_r, headlines, descriptions, final_url, path1, path2):
    svc = client.get_service("AdGroupAdService")
    op = client.get_type("AdGroupAdOperation")
    aga = op.create
    aga.ad_group = ag_r
    aga.status = client.enums.AdGroupAdStatusEnum.ENABLED
    ad = aga.ad
    ad.final_urls.append(final_url)
    for h in headlines:
        a = client.get_type("AdTextAsset")
        a.text = h
        ad.responsive_search_ad.headlines.append(a)
    for d in descriptions:
        a = client.get_type("AdTextAsset")
        a.text = d
        ad.responsive_search_ad.descriptions.append(a)
    ad.responsive_search_ad.path1 = path1
    ad.responsive_search_ad.path2 = path2
    svc.mutate_ad_group_ads(customer_id=cid, operations=[op])
    print(f"      + RSA → {final_url}")


def add_sitelinks(client, cid, campaign_r):
    """Add sitelink extensions to a campaign."""
    ext_svc = client.get_service("CampaignAssetService")
    asset_svc = client.get_service("AssetService")

    sitelinks = [
        {"text": "Our Services", "desc1": "Electrician, Plumber, Intercom", "desc2": "24/7 in all Riyadh districts", "url": f"{BASE_URL}/services/"},
        {"text": "About Us", "desc1": "30+ years family experience", "desc2": "Pakistani-Saudi team you can trust", "url": f"{BASE_URL}/about-us/"},
        {"text": "Contact Us", "desc1": "Call, WhatsApp, or send photo", "desc2": "We respond within minutes", "url": f"{BASE_URL}/contact/"},
        {"text": "Electrician Riyadh", "desc1": "AC repair, wiring, power faults", "desc2": "Expert arrives within 1 hour", "url": f"{BASE_URL}/services/electrician/"},
        {"text": "Plumber Riyadh", "desc1": "Leaks, drains, heaters, pipes", "desc2": "Emergency service available 24/7", "url": f"{BASE_URL}/services/plumber/"},
    ]

    asset_ops = []
    for sl in sitelinks:
        op = client.get_type("AssetOperation")
        asset = op.create
        asset.sitelink_asset.description1 = sl["desc1"]
        asset.sitelink_asset.description2 = sl["desc2"]
        asset.sitelink_asset.link_text = sl["text"]
        asset.final_urls.append(sl["url"])
        asset_ops.append(op)

    resp = asset_svc.mutate_assets(customer_id=cid, operations=asset_ops)
    asset_resources = [r.resource_name for r in resp.results]
    print(f"  ✅ {len(asset_resources)} sitelink assets created")

    # Link assets to campaign
    link_ops = []
    for ar in asset_resources:
        op = client.get_type("CampaignAssetOperation")
        ca = op.create
        ca.campaign = campaign_r
        ca.asset = ar
        ca.field_type = client.enums.AssetFieldTypeEnum.SITELINK
        link_ops.append(op)

    ext_svc.mutate_campaign_assets(customer_id=cid, operations=link_ops)
    print(f"  ✅ Sitelinks linked to campaign")


def add_callout_extensions(client, cid, campaign_r):
    """Add callout extensions."""
    asset_svc = client.get_service("AssetService")
    ext_svc = client.get_service("CampaignAssetService")

    callouts = [
        "30-Day Warranty",
        "Available 24/7",
        "Arrives in 1 Hour",
        "30+ Years Experience",
        "No Hidden Fees",
        "WhatsApp Booking",
        "Prayer-Time Aware",
        "Free Phone Assessment",
    ]

    ops = []
    for co in callouts:
        op = client.get_type("AssetOperation")
        op.create.callout_asset.callout_text = co
        ops.append(op)

    resp = asset_svc.mutate_assets(customer_id=cid, operations=ops)
    asset_resources = [r.resource_name for r in resp.results]

    link_ops = []
    for ar in asset_resources:
        op = client.get_type("CampaignAssetOperation")
        ca = op.create
        ca.campaign = campaign_r
        ca.asset = ar
        ca.field_type = client.enums.AssetFieldTypeEnum.CALLOUT
        link_ops.append(op)

    ext_svc.mutate_campaign_assets(customer_id=cid, operations=link_ops)
    print(f"  ✅ {len(callouts)} callout extensions added")


def add_call_extension(client, cid, campaign_r):
    """Add call extension with phone number."""
    asset_svc = client.get_service("AssetService")
    ext_svc = client.get_service("CampaignAssetService")

    op = client.get_type("AssetOperation")
    op.create.call_asset.country_code = "SA"
    op.create.call_asset.phone_number = "0508901536"
    op.create.call_asset.call_conversion_reporting_state = (
        client.enums.CallConversionReportingStateEnum.USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION
    )

    resp = asset_svc.mutate_assets(customer_id=cid, operations=[op])
    call_asset = resp.results[0].resource_name

    link_op = client.get_type("CampaignAssetOperation")
    link_op.create.campaign = campaign_r
    link_op.create.asset = call_asset
    link_op.create.field_type = client.enums.AssetFieldTypeEnum.CALL

    ext_svc.mutate_campaign_assets(customer_id=cid, operations=[link_op])
    print(f"  ✅ Call extension added: 0508901536")


def add_structured_snippets(client, cid, campaign_r):
    """Add structured snippet extensions."""
    asset_svc = client.get_service("AssetService")
    ext_svc = client.get_service("CampaignAssetService")

    op = client.get_type("AssetOperation")
    snippet = op.create.structured_snippet_asset
    snippet.header = "Service catalog"
    snippet.values.extend([
        "Electrician",
        "Plumber",
        "AC Repair",
        "Intercom",
        "Security Cameras",
        "Water Heater",
    ])

    resp = asset_svc.mutate_assets(customer_id=cid, operations=[op])
    snippet_asset = resp.results[0].resource_name

    link_op = client.get_type("CampaignAssetOperation")
    link_op.create.campaign = campaign_r
    link_op.create.asset = snippet_asset
    link_op.create.field_type = client.enums.AssetFieldTypeEnum.STRUCTURED_SNIPPET

    ext_svc.mutate_campaign_assets(customer_id=cid, operations=[link_op])
    print(f"  ✅ Structured snippets added")


# ==========================================
# CAMPAIGN 1: ELECTRICIAN ARABIC
# ==========================================

def build_electrician_arabic(client):
    print(f"\n{'='*60}")
    print(f"⚡ CAMPAIGN 1: SHE - Electrician Arabic")
    print(f"{'='*60}")

    budget = create_budget(client, SAUDI_CUSTOMER_ID, "SHE - Electrician AR Budget", BUDGET_AR_ELEC)
    campaign = create_campaign(client, SAUDI_CUSTOMER_ID, "SHE - Electrician Arabic", budget)

    add_negatives(client, SAUDI_CUSTOMER_ID, campaign, NEGATIVE_KEYWORDS_AR)
    add_sitelinks(client, SAUDI_CUSTOMER_ID, campaign)
    add_callout_extensions(client, SAUDI_CUSTOMER_ID, campaign)
    add_call_extension(client, SAUDI_CUSTOMER_ID, campaign)
    add_structured_snippets(client, SAUDI_CUSTOMER_ID, campaign)

    # --- AG: Emergency (highest intent, highest bid) ---
    print(f"\n  🚨 Emergency Keywords")
    ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign, "Electrician - Emergency", 50_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
        "المكيف ما يبرد",           # 140/mo — AC not cooling
        "الكهرب يفصل",             # problem keyword
        "اللمبات ما تشتغل",        # lights not working
        "انقطاع كهرباء الرياض",     # power outage riyadh
        "عطل كهربائي الرياض",       # electrical fault riyadh
        "تماس كهربائي",            # short circuit
    ], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag,
        ["كهربائي طوارئ ٢٤ ساعة", "الكهرب فصل؟ نوصلك خلال ساعة", "فني كهرباء الرياض الآن",
         "إصلاح فوري — اتصل الحين", "ضمان ٣٠ يوم على الشغل", "خبرة ٣٠+ سنة عائلية",
         "‎٠٥٠ ٨٩٠ ١٥٣٦", "متوفرين حتى بالليل", "نراعي أوقات الصلاة", "بدون وسطاء — خدمة مباشرة"],
        ["الكهرب فصل أو المكيف وقف؟ فني كهرباء يوصلك خلال ساعة. خبرة ٣٠+ سنة. اتصل الحين!",
         "إصلاح أعطال كهربائية فوري في الرياض. نراعي أوقات الصلاة. ضمان ٣٠ يوم.",
         "كهربائي طوارئ متوفر الآن. أرسل صورة المشكلة واتساب ونجيك بأسرع وقت."],
        f"{BASE_URL}/", "كهربائي", "طوارئ")

    # --- AG: Near Me (huge volume) ---
    print(f"\n  📍 Near Me Keywords")
    ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign, "Electrician - Near Me", 40_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
        "كهربائي قريب مني",         # 480/mo LOW
        "كهربائي قريب من موقعي",     # 480/mo MEDIUM
        "كهربائي قريب",             # 140/mo LOW
        "فني كهرباء قريب مني",
    ], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag,
        ["كهربائي قريب منك — خلال ساعة", "أقرب كهربائي في الرياض", "نوصلك وين ما كنت",
         "فني كهرباء قريب الآن", "ضمان ٣٠ يوم", "‎٠٥٠ ٨٩٠ ١٥٣٦",
         "خبرة ٣٠+ سنة عائلية", "متوفر ٢٤/٧", "اتصل أو واتساب", "شمال الرياض وكل الأحياء"],
        ["كهربائي قريب منك في الرياض. نوصلك خلال ساعة أينما كنت. اتصل الآن!",
         "فني كهرباء محترف قريب من موقعك. خبرة ٣٠+ سنة. ضمان ٣٠ يوم. ‎٠٥٠٨٩٠١٥٣٦",
         "أرسل موقعك واتساب ونرسل لك أقرب فني. متوفرين ٢٤/٧ في شمال الرياض."],
        f"{BASE_URL}/", "كهربائي", "قريب")

    # --- AG: General Riyadh ---
    print(f"\n  🔧 General Keywords")
    ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign, "Electrician - General Riyadh", 25_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
        "كهربائي الرياض",           # 320/mo LOW
        "كهربائي شمال الرياض",       # 170/mo MEDIUM
        "فني كهرباء الرياض",        # 70/mo MEDIUM
        "كهربائي منازل الرياض",     # 210/mo MEDIUM
        "صيانة مكيفات الرياض",     # 590/mo MEDIUM
        "كهربائي بالرياض",          # 110/mo LOW
        "سباكة وكهرباء الرياض",     # 170/mo MEDIUM
    ], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag,
        ["كهربائي الرياض محترف", "صيانة مكيفات وفريون", "تمديدات كهربائية جديدة",
         "نوصلك خلال ساعة", "ضمان ٣٠ يوم", "اتصل الآن ‎٠٥٠٨٩٠١٥٣٦",
         "خبرة ٣٠+ سنة", "أسعار عادلة — نتفق قبل البدء", "خدمة ٢٤/٧ شمال الرياض", "فني أمين ومحترم"],
        ["كهربائي محترف في الرياض. صيانة مكيفات، تمديدات، إصلاح أعطال. اتصل للتقييم المجاني!",
         "فريق خبرة ٣٠+ سنة. نوصلك خلال ساعة مع ضمان الشغل. أرسل واتساب أو اتصل.",
         "خدمة كهربائي مباشرة بدون وسطاء. أسعار عادلة ونتفق قبل البدء. ‎٠٥٠٨٩٠١٥٣٦"],
        f"{BASE_URL}/services/electrician/", "كهربائي", "الرياض")

    # --- 12 Area Ad Groups ---
    print(f"\n  🏘️  Area-Specific Ad Groups (12)")
    for area in AREAS:
        landing = f"{BASE_URL}/كهربائي-{area['slug']}/"
        ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign,
                              f"Electrician - {area['en']}", 30_000_000)
        add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
            f"كهربائي {area['ar']}",
            f"كهربائي حي {area['ar']}",
        ], "PHRASE")
        create_rsa(client, SAUDI_CUSTOMER_ID, ag,
            [f"كهربائي {area['ar']} — خلال ساعة", f"نوصلك {area['ar']} بأسرع وقت",
             f"كهربائي محترف في {area['ar']}", f"خبرة ٣٠+ سنة في {area['ar']}",
             "ضمان ٣٠ يوم", "اتصل الآن ‎٠٥٠٨٩٠١٥٣٦",
             f"متوفر الآن في {area['ar']}", "خدمة مباشرة بدون وسطاء",
             "نراعي أوقات الصلاة", "أرسل صورة المشكلة واتساب"],
            [f"كهربائي محترف في {area['ar']} الرياض. نوصلك خلال ساعة مع ضمان ٣٠ يوم. اتصل الآن!",
             f"خبرة عائلية ٣٠+ سنة في خدمة بيوت {area['ar']}. خدمة مباشرة، أسعار عادلة.",
             f"أرسل صورة المشكلة واتساب ونعطيك تقييم مجاني. متوفرين ٢٤/٧ في {area['ar']}."],
            landing, "كهربائي", area['ar'])

    return campaign


# ==========================================
# CAMPAIGN 2: PLUMBER ARABIC
# ==========================================

def build_plumber_arabic(client):
    print(f"\n{'='*60}")
    print(f"💧 CAMPAIGN 2: SHE - Plumber Arabic")
    print(f"{'='*60}")

    budget = create_budget(client, SAUDI_CUSTOMER_ID, "SHE - Plumber AR Budget", BUDGET_AR_PLUMB)
    campaign = create_campaign(client, SAUDI_CUSTOMER_ID, "SHE - Plumber Arabic", budget)

    add_negatives(client, SAUDI_CUSTOMER_ID, campaign, NEGATIVE_KEYWORDS_AR)
    add_sitelinks(client, SAUDI_CUSTOMER_ID, campaign)
    add_callout_extensions(client, SAUDI_CUSTOMER_ID, campaign)
    add_call_extension(client, SAUDI_CUSTOMER_ID, campaign)
    add_structured_snippets(client, SAUDI_CUSTOMER_ID, campaign)

    # --- AG: Emergency ---
    print(f"\n  🚨 Emergency Keywords")
    ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign, "Plumber - Emergency", 50_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
        "تسريب مياه",              # 1900/mo MEDIUM
        "المجاري مسدودة",          # drain blocked
        "السخان خربان",            # heater broken
        "المويه تسرب",             # water leaking
        "سباك طوارئ الرياض",       # emergency plumber
        "تسريب المياه من السقف",    # 210/mo — ceiling leak
    ], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag,
        ["سباك طوارئ ٢٤ ساعة", "تسريب مياه؟ نوصلك خلال ساعة", "سباك الرياض الآن",
         "إصلاح فوري — اتصل الحين", "ضمان ٣٠ يوم على الشغل", "خبرة ٣٠+ سنة عائلية",
         "‎٠٥٠ ٨٩٠ ١٥٣٦", "المجاري مسدودة؟ نحلها اليوم", "نراعي أوقات الصلاة", "بدون وسطاء — خدمة مباشرة"],
        ["تسريب مياه أو مجاري مسدودة؟ سباك يوصلك خلال ساعة. خبرة ٣٠+ سنة. اتصل الحين!",
         "إصلاح تسريبات فوري في الرياض. نراعي أوقات الصلاة. ضمان ٣٠ يوم.",
         "سباك طوارئ متوفر الآن. أرسل صورة المشكلة واتساب ونجيك بأسرع وقت."],
        f"{BASE_URL}/", "سباك", "طوارئ")

    # --- AG: Near Me ---
    print(f"\n  📍 Near Me Keywords")
    ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign, "Plumber - Near Me", 40_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
        "سباك قريب من موقعي",       # 1900/mo MEDIUM — HUGE
        "سباك قريب مني",            # 320/mo LOW
        "سباك قريب",                # 260/mo LOW
        "فني سباكة قريب مني",
    ], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag,
        ["سباك قريب منك — خلال ساعة", "أقرب سباك في الرياض", "نوصلك وين ما كنت",
         "سباك محترف قريب الآن", "ضمان ٣٠ يوم", "‎٠٥٠ ٨٩٠ ١٥٣٦",
         "خبرة ٣٠+ سنة عائلية", "متوفر ٢٤/٧", "اتصل أو واتساب", "شمال الرياض وكل الأحياء"],
        ["سباك قريب منك في الرياض. نوصلك خلال ساعة أينما كنت. اتصل الآن!",
         "فني سباكة محترف قريب من موقعك. خبرة ٣٠+ سنة. ضمان ٣٠ يوم. ‎٠٥٠٨٩٠١٥٣٦",
         "أرسل موقعك واتساب ونرسل لك أقرب سباك. متوفرين ٢٤/٧ في شمال الرياض."],
        f"{BASE_URL}/", "سباك", "قريب")

    # --- AG: General ---
    print(f"\n  🔧 General Keywords")
    ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign, "Plumber - General Riyadh", 25_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
        "سباك الرياض",              # 880/mo MEDIUM
        "سباك شمال الرياض",          # 320/mo MEDIUM
        "فني سباكة الرياض",         # volume
        "سباك بالرياض",             # 260/mo LOW
        "سباك منازل الرياض",
        "تسليك مجاري الرياض",
        "صيانة سخانات الرياض",
    ], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag,
        ["سباك الرياض محترف", "إصلاح تسريبات المياه", "تسليك مجاري مسدودة",
         "نوصلك خلال ساعة", "ضمان ٣٠ يوم", "اتصل الآن ‎٠٥٠٨٩٠١٥٣٦",
         "خبرة ٣٠+ سنة", "أسعار عادلة — نتفق قبل البدء", "صيانة سخانات وخلاطات", "سباك أمين ومحترم"],
        ["سباك محترف في الرياض. تسريبات، مجاري، سخانات، خلاطات. اتصل للتقييم المجاني!",
         "فريق خبرة ٣٠+ سنة في السباكة. نوصلك خلال ساعة مع ضمان الشغل. ‎٠٥٠٨٩٠١٥٣٦",
         "خدمة سباكة مباشرة بدون وسطاء. أسعار عادلة ونتفق قبل البدء."],
        f"{BASE_URL}/services/plumber/", "سباك", "الرياض")

    # --- 12 Area Ad Groups ---
    print(f"\n  🏘️  Area-Specific Ad Groups (12)")
    for area in AREAS:
        landing = f"{BASE_URL}/سباك-{area['slug']}/"
        ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign,
                              f"Plumber - {area['en']}", 30_000_000)
        add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
            f"سباك {area['ar']}",
            f"سباك حي {area['ar']}",
        ], "PHRASE")
        create_rsa(client, SAUDI_CUSTOMER_ID, ag,
            [f"سباك {area['ar']} — خلال ساعة", f"نوصلك {area['ar']} بأسرع وقت",
             f"سباك محترف في {area['ar']}", f"خبرة ٣٠+ سنة في {area['ar']}",
             "ضمان ٣٠ يوم", "اتصل الآن ‎٠٥٠٨٩٠١٥٣٦",
             f"متوفر الآن في {area['ar']}", "خدمة مباشرة بدون وسطاء",
             "نراعي أوقات الصلاة", "أرسل صورة المشكلة واتساب"],
            [f"سباك محترف في {area['ar']} الرياض. نوصلك خلال ساعة مع ضمان ٣٠ يوم. اتصل الآن!",
             f"خبرة عائلية ٣٠+ سنة في خدمة بيوت {area['ar']}. خدمة مباشرة، أسعار عادلة.",
             f"أرسل صورة المشكلة واتساب ونعطيك تقييم مجاني. متوفرين ٢٤/٧ في {area['ar']}."],
            landing, "سباك", area['ar'])

    return campaign


# ==========================================
# CAMPAIGN 3: ENGLISH COMBINED
# ==========================================

def build_english_campaign(client):
    print(f"\n{'='*60}")
    print(f"🌐 CAMPAIGN 3: SHE - English Combined")
    print(f"{'='*60}")

    budget = create_budget(client, SAUDI_CUSTOMER_ID, "SHE - English Budget", BUDGET_EN)
    campaign = create_campaign(client, SAUDI_CUSTOMER_ID, "SHE - English Combined", budget)

    add_negatives(client, SAUDI_CUSTOMER_ID, campaign, NEGATIVE_KEYWORDS_EN)
    add_sitelinks(client, SAUDI_CUSTOMER_ID, campaign)
    add_callout_extensions(client, SAUDI_CUSTOMER_ID, campaign)
    add_call_extension(client, SAUDI_CUSTOMER_ID, campaign)
    add_structured_snippets(client, SAUDI_CUSTOMER_ID, campaign)

    # --- AG: Electrician Near Me ---
    print(f"\n  ⚡ Electrician Near Me (EN)")
    ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign, "EN - Electrician Near Me", 35_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
        "electrician near me",           # 880/mo LOW
        "electrician riyadh",            # 110/mo LOW
        "emergency electrician riyadh",
        "electrical repair riyadh",
        "AC repair riyadh",              # 210/mo MEDIUM
    ], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag,
        ["Electrician Riyadh — 1 Hour", "Emergency Electrician 24/7", "AC Repair & Maintenance",
         "30-Day Work Warranty", "Call Now 050 890 1536", "30+ Years Family Experience",
         "All North Riyadh Districts", "No Middlemen — Direct Service", "WhatsApp Booking Available",
         "Prayer-Time Aware Scheduling"],
        ["Professional electrician in Riyadh. AC repair, wiring, fault fixing. Arrives in 1 hour. Call now!",
         "30+ years family experience. Direct service, fair prices, 30-day warranty. 050 890 1536",
         "Send a photo of the problem on WhatsApp for a free assessment. Available 24/7 in Riyadh."],
        f"{BASE_URL}/", "Electrician", "Riyadh")

    # --- AG: Plumber Near Me ---
    print(f"\n  💧 Plumber Near Me (EN)")
    ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign, "EN - Plumber Near Me", 35_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
        "plumber near me",               # 1600/mo LOW
        "plumber riyadh",                # 170/mo MEDIUM
        "emergency plumber riyadh",
        "water leak repair riyadh",
        "plumber near me riyadh",
    ], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag,
        ["Plumber Riyadh — 1 Hour", "Emergency Plumber 24/7", "Water Leak Repair Fast",
         "30-Day Work Warranty", "Call Now 050 890 1536", "30+ Years Family Experience",
         "Drain Cleaning & Unblocking", "No Middlemen — Direct Service", "WhatsApp Booking Available",
         "All North Riyadh Districts"],
        ["Professional plumber in Riyadh. Leaks, drains, heaters, pipes. Arrives in 1 hour. Call now!",
         "30+ years family experience. Direct service, fair prices, 30-day warranty. 050 890 1536",
         "Send a photo of the problem on WhatsApp for a free assessment. Available 24/7 in Riyadh."],
        f"{BASE_URL}/", "Plumber", "Riyadh")

    # --- AG: AC Maintenance ---
    print(f"\n  ❄️ AC Maintenance (EN)")
    ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign, "EN - AC Maintenance", 30_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
        "ac repair riyadh",
        "ac maintenance riyadh",         # 20/mo
        "air conditioning service riyadh",  # 40/mo
        "ac not cooling riyadh",
    ], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag,
        ["AC Repair Riyadh — Same Day", "AC Not Cooling? We Fix It", "Freon Refill & Deep Clean",
         "30-Day Warranty", "Call 050 890 1536", "Available 24/7",
         "30+ Years Experience", "Fair Prices — No Surprises", "North Riyadh Coverage", "Expert AC Technician"],
        ["AC stopped? Expert technician reaches you in 1 hour. Freon refill, repairs, deep cleaning.",
         "Professional AC maintenance in Riyadh. 30+ years experience. Call for free phone assessment.",
         "Don't suffer the heat — we fix AC problems same day. WhatsApp us a photo. 050 890 1536"],
        f"{BASE_URL}/", "AC-Repair", "Riyadh")

    # --- AG: Home Maintenance General ---
    print(f"\n  🏠 Home Maintenance (EN)")
    ag = create_ad_group(client, SAUDI_CUSTOMER_ID, campaign, "EN - Home Maintenance", 25_000_000)
    add_keywords(client, SAUDI_CUSTOMER_ID, ag, [
        "home maintenance riyadh",
        "home repair riyadh",
        "handyman riyadh",
        "intercom installation riyadh",
    ], "PHRASE")
    create_rsa(client, SAUDI_CUSTOMER_ID, ag,
        ["Home Maintenance Riyadh", "Electrician + Plumber + Intercom", "One Team — All Solutions",
         "30-Day Warranty", "Call 050 890 1536", "Available 24/7",
         "30+ Years Experience", "Security Camera Install", "Smart Doorbell Setup", "Direct Service — No Agency"],
        ["Complete home maintenance in Riyadh. Electrical, plumbing, intercom — one team handles it all.",
         "30+ years family experience serving Riyadh homes. Fair prices, 30-day warranty. Call now!",
         "Need an electrician, plumber, or security system? We arrive in 1 hour. 050 890 1536"],
        f"{BASE_URL}/services/", "Home", "Riyadh")

    return campaign


# ==========================================
# MAIN
# ==========================================

def main():
    print("\n" + "=" * 60)
    print("🏗️  SAUDI HOME EXPERTS — PRODUCTION CAMPAIGN BUILDER")
    print("=" * 60)

    try:
        client = get_client()

        c1 = build_electrician_arabic(client)
        c2 = build_plumber_arabic(client)
        c3 = build_english_campaign(client)

        print(f"""
{'='*60}
✅ ALL CAMPAIGNS CREATED SUCCESSFULLY
{'='*60}

📊 Structure:
   Campaign 1: SHE - Electrician Arabic  (350 PKR/day)
     → 15 ad groups: Emergency + Near Me + General + 12 Areas
     → Sitelinks, Callouts, Call Extension, Snippets

   Campaign 2: SHE - Plumber Arabic  (350 PKR/day)
     → 15 ad groups: Emergency + Near Me + General + 12 Areas
     → Sitelinks, Callouts, Call Extension, Snippets

   Campaign 3: SHE - English Combined  (300 PKR/day)
     → 4 ad groups: Electrician + Plumber + AC + Home Maintenance
     → Sitelinks, Callouts, Call Extension, Snippets

   Total: 34 ad groups, 34 RSA ads, 1,000 PKR/day

📞 Extensions on ALL campaigns:
   • 5 Sitelinks (Services, About, Contact, Electrician, Plumber)
   • 8 Callouts (24/7, Warranty, 1 Hour, Experience, etc.)
   • 1 Call Extension (0508901536)
   • 1 Structured Snippet (Service catalog)

⚠️  ALL CAMPAIGNS ARE PAUSED
   Next steps in Google Ads console:
   1. Review all ads and keywords
   2. Set location targeting → North Riyadh
   3. Create conversion actions (phone_call + whatsapp_click)
   4. Enable campaigns
   5. Monitor 3-5 days → optimize
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
