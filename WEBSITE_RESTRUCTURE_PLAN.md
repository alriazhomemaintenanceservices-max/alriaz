# Saudi Home Experts - Complete Website Restructure Plan

## Core Principles
1. **Arabic-First Design** - Default to Arabic, English as secondary option
2. **Local Problem-Solving Focus** - Address specific Saudi household issues
3. **Area-Specific Content** - Hyper-local pages for each district
4. **Mobile-First** - 96% of traffic is mobile
5. **Trust Through Transparency** - Clear pricing, real availability
6. **SEO & AI Optimized** - Answer questions directly for LLM ranking

---

## 1. URL Structure (SEO Optimized)

### Arabic URLs (Primary):
```
/                                    → الصفحة الرئيسية
/كهربائي-الرياض                      → Main electrician page
/سباك-الرياض                         → Main plumber page
/كهربائي-النرجس                      → Area-specific pages
/سباك-الياسمين
/المكيف-ما-يبرد                      → Problem-specific pages
/المويه-تسرب-من-السقف
/اسعار-كهربائي-الرياض                → Pricing pages
/طوارئ-24-ساعة                       → Emergency services
```

### English URLs (Secondary):
```
/en                                  → English homepage
/en/electrician-riyadh
/en/plumber-riyadh
/en/electrician-narjis
/en/ac-not-cooling
/en/water-leak-ceiling
```

---

## 2. Homepage Structure (Arabic Default)

### Hero Section
```
صورة خلفية: حي سعودي حقيقي (النرجس/الياسمين)

العنوان الرئيسي: "كهربائي وسباك - نصلك خلال ساعة"
العنوان الفرعي: "خدمة فورية في [اسم الحي التلقائي حسب IP]"

زر رئيسي: "📞 اتصل الآن: 050 890 1536"
زر ثانوي: "احجز موعد"

شريط الثقة: "✓ متوفر الآن ✓ أسعار واضحة ✓ ضمان 30 يوم"
```

### Problem Solver Section
```
"وش المشكلة عندك؟"

[صناديق تفاعلية بالأيقونات]
□ المكيف ما يبرد        □ الكهرب يفصل
□ المويه تسرب          □ المجاري مسدودة
□ السخان خربان         □ اللمبات ما تشتغل

↓ عند الضغط ↓
"نقدر نحل هذي المشكلة خلال ساعة - اتصل الآن"
```

### Area Coverage Map
```
"نغطي كل أحياء شمال الرياض"

[خريطة تفاعلية]
عند الضغط على الحي → صفحة خاصة بالحي
```

### Trust Building
```
"ليش الناس تختارنا؟"

🏠 خدمنا 500+ بيت في الرياض
⏰ نوصل خلال 45-60 دقيقة
🛡️ ضمان 30 يوم على الصيانة
💰 أسعار واضحة - بدون مفاجآت
🕌 نحترم أوقات الصلاة
```

---

## 3. Area-Specific Pages Template

### URL Pattern: /كهربائي-[اسم-الحي]

```
H1: كهربائي [اسم الحي] - وصول سريع 24/7

المقدمة:
"نوفر خدمة كهربائي محترف في [اسم الحي] والمناطق المجاورة. 
فني خبير يصلك خلال 45 دقيقة لحل جميع مشاكل الكهرباء."

المشاكل الشائعة في [اسم الحي]:
• مكيفات الفلل المركزية (للأحياء الراقية)
• مكيفات الشباك القديمة (للأحياء الشعبية)
• انقطاع الكهرباء المتكرر
• أعطال السخانات

معالم قريبة:
"نحن قريبين من [مسجد محلي] و [مول/مركز تجاري]"

الأسعار في [اسم الحي]:
الكشف: 50-75 ريال (حسب الحي)
```

---

## 4. Problem-Specific Pages (SEO Gold)

### Examples:
```
/المكيف-ما-يبرد-الرياض
H1: المكيف ما يبرد في حر الرياض؟ نصلحه خلال ساعة

المحتوى يجيب على:
- ليش المكيف ما يبرد؟
- كم يكلف تعبئة الفريون؟
- متى احتاج تغيير المكيف؟
- هل المشكلة من الكمبريسر؟

Schema Markup: FAQPage
```

---

## 5. Service Pages Structure

### /كهربائي-الرياض
```
H1: كهربائي الرياض - خدمة 24/7 لكل الأحياء

Sections:
1. خدماتنا الكهربائية
2. الأسعار (شفافية كاملة)
3. المناطق التي نغطيها
4. الأسئلة الشائعة
5. احجز الآن

Internal Links to:
- /كهربائي-النرجس
- /كهربائي-الياسمين
- /المكيف-ما-يبرد
```

---

## 6. FAQ Structure (Voice Search Optimized)

### Questions in Natural Saudi Arabic:
```
"كم ياخذ الكهربائي عشان يجي؟"
"كم سعر تصليح المكيف؟"
"تجون يوم الجمعة؟"
"عندكم ضمان على الشغل؟"
"الفني يتكلم عربي؟"
```

---

## 7. Technical SEO Implementation

### Schema Markup:
```json
{
  "@type": "LocalBusiness",
  "name": "خبراء المنزل السعودي",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "الرياض",
    "addressCountry": "SA"
  },
  "areaServed": ["النرجس", "الياسمين", "قرطبة"],
  "priceRange": "50-500 SAR",
  "openingHours": "Mo-Su 00:00-23:59"
}
```

### Meta Tags for Each Page:
```html
<title>كهربائي [الحي] - وصول خلال 45 دقيقة | 050 890 1536</title>
<meta name="description" content="كهربائي محترف في [الحي]. خدمة 24/7. أسعار واضحة. ضمان 30 يوم.">
```

---

## 8. Language Toggle Implementation

### Simple Toggle (Not Google Translate):
```javascript
// Store preference in localStorage
// Default to Arabic
// Toggle button in header (small, unobtrusive)

ar.saudihomeexperts.com → Arabic version
en.saudihomeexperts.com → English version
```

---

## 9. Mobile-First Features

1. **Sticky Call Button** - Always visible
2. **Click-to-Call** on all phone numbers
3. **SMS Booking** - "Send SMS with: Name + Area + Problem"
4. **WhatsApp Integration** (if they start using it)
5. **Fast Loading** - Optimize images, lazy load

---

## 10. Conversion Tracking Setup

```javascript
// Track all interactions
gtag('event', 'conversion', {
  'send_to': 'AW-18063458010/[CONVERSION_ID]',
  'value': 50.0,
  'currency': 'SAR',
  'transaction_id': `${area}_${action}_${timestamp}`
});

// Track:
- Phone clicks
- SMS clicks
- Form submissions
- WhatsApp clicks
- Area selection
```

---

## 11. Content Strategy

### Blog/Help Section:
```
/مساعدة/تعبئة-فريون-المكيف
/مساعدة/تنظيف-المجاري
/مساعدة/توفير-الكهرباء
```

### Seasonal Content:
```
Summer: "صيانة المكيف قبل الصيف"
Ramadan: "خدمة طوارئ 24 ساعة في رمضان"
Winter: "صيانة السخانات"
```

---

## 12. Priority Implementation Order

### Phase 1 (Week 1):
1. New homepage (Arabic)
2. 5 area-specific pages (النرجس، الياسمين، قرطبة، غرناطة، الفلاح)
3. Phone tracking implementation

### Phase 2 (Week 2):
4. Problem-specific pages (top 5 problems)
5. Service pages (electrician, plumber)
6. FAQ page

### Phase 3 (Week 3):
7. Remaining area pages
8. English version
9. Blog/help section

---

## 13. Success Metrics

1. **Phone Call Conversions** - Primary KPI
2. **Area-Specific Traffic** - Which areas convert best
3. **Problem Page Engagement** - Which problems drive calls
4. **Mobile vs Desktop** - Should be 90%+ mobile
5. **Arabic vs English** - Track language preference

---

## 14. Local Competition Differentiation

What we do differently:
1. **Area-specific content** (competitors use generic pages)
2. **Problem-first approach** (not service-first)
3. **Transparent pricing** (competitors hide prices)
4. **Saudi dialect** (competitors use formal Arabic)
5. **Fast, simple design** (competitors have complex sites)

---

## 15. Voice Search & AI Optimization

Optimize for questions like:
- "يا سيري، ابي كهربائي في النرجس"
- "OK Google، كم سعر تصليح المكيف في الرياض"
- "اقرب سباك من موقعي"

Natural language content that directly answers questions.