// De-templating data for the 54 service×district pages (src/components/area-pages/ElectricianAreaPage.tsx).
// Each district gets a unique intro blurb and one of four FAQ angles, instead of
// every district reusing identical FAQ/description copy. Intros are deliberately
// generic-but-varied (residential character, not specific landmarks/streets) since
// those facts aren't independently verifiable — wrong specifics on a real lead-gen
// site are worse than plain copy.

export type FaqVariant = 'villa' | 'older' | 'compound' | 'coverage';

export interface AreaLocalContent {
  intro: { ar: string; en: string };
  faqVariant: FaqVariant;
}

// Canonical order — also used to derive "nearby districts" (previous/next in
// this list). Matches the order already used consistently across page.tsx,
// services/*/page.tsx, sitemap.ts, and site-map/page.tsx.
export const AREA_ORDER = [
  'yasmin', 'arid', 'qirawan', 'banban', 'rabee', 'sahafa', 'malqa', 'nada',
  'wadi', 'nafal', 'narjis', 'qurtubah', 'granada', 'falah', 'ishbiliyah',
  'hittin', 'aqiq', 'sadis',
] as const;

export const AREA_NAMES: Record<string, { ar: string; en: string }> = {
  yasmin: { ar: 'الياسمين', en: 'Al Yasmin' },
  arid: { ar: 'العارض', en: 'Al Arid' },
  qirawan: { ar: 'القيروان', en: 'Al Qirawan' },
  banban: { ar: 'بنبان', en: 'Banban' },
  rabee: { ar: 'الربيع', en: 'Al Rabee' },
  sahafa: { ar: 'الصحافة', en: 'Al Sahafa' },
  malqa: { ar: 'الملقا', en: 'Al Malqa' },
  nada: { ar: 'الندى', en: 'Al Nada' },
  wadi: { ar: 'الوادي', en: 'Al Wadi' },
  nafal: { ar: 'النفل', en: 'Al Nafal' },
  narjis: { ar: 'النرجس', en: 'Al Narjis' },
  qurtubah: { ar: 'قرطبة', en: 'Qurtubah' },
  granada: { ar: 'غرناطة', en: 'Granada' },
  falah: { ar: 'الفلاح', en: 'Al Falah' },
  ishbiliyah: { ar: 'اشبيلية', en: 'Ishbiliyah' },
  hittin: { ar: 'حطين', en: 'Hittin' },
  aqiq: { ar: 'العقيق', en: 'Al Aqiq' },
  sadis: { ar: 'الحي السادس', en: 'Al-Hay Al-Sadis' },
};

const CONTENT: Record<string, AreaLocalContent> = {
  yasmin: {
    intro: {
      ar: 'حي يغلب عليه طابع الفلل والعائلات، ومن أوائل الأحياء التي بدأ فريقنا بتغطيتها في شمال الرياض.',
      en: 'A district shaped mainly by villas and families — one of the first areas our team started covering in North Riyadh.',
    },
    faqVariant: 'villa',
  },
  arid: {
    intro: {
      ar: 'حي سكني هادئ يغلب عليه طابع الفلل المستقلة، ونصل إليه بسرعة ضمن نطاق تغطيتنا الشمالية.',
      en: 'A quiet residential district dominated by standalone villas, reached quickly within our northern coverage area.',
    },
    faqVariant: 'villa',
  },
  qirawan: {
    intro: {
      ar: 'حي متوسط الكثافة في شمال الرياض، بمزيج من الفلل والمجمعات السكنية الصغيرة.',
      en: 'A medium-density North Riyadh district with a mix of villas and small residential compounds.',
    },
    faqVariant: 'older',
  },
  banban: {
    intro: {
      ar: 'حي أطرافي آخذ في التوسع، ونحرص على تغطيته رغم بعده النسبي عن باقي أحياء شبكة تغطيتنا.',
      en: 'An expanding outer district — we still cover it despite it being farther from the rest of our coverage network.',
    },
    faqVariant: 'coverage',
  },
  rabee: {
    intro: {
      ar: 'حي عائلي مستقر يغلب عليه سكان الفلل، ضمن نطاق تغطيتنا الأساسي في شمال الرياض.',
      en: 'A stable, family-oriented, villa-heavy district within our core North Riyadh coverage.',
    },
    faqVariant: 'villa',
  },
  sahafa: {
    intro: {
      ar: 'من الأحياء المطوَّرة منذ فترة طويلة نسبيًا في شمال الرياض، بمزيج من الفلل والعمارات السكنية.',
      en: 'One of the relatively long-established North Riyadh districts, with a mix of villas and apartment buildings.',
    },
    faqVariant: 'older',
  },
  malqa: {
    intro: {
      ar: 'حي راقٍ يشهد نموًا عمرانيًا ملحوظًا، بمجمعات فلل حديثة ومرافق خدمية متنوعة.',
      en: 'An upscale district with noticeable ongoing development, modern villa compounds, and a range of service facilities.',
    },
    faqVariant: 'compound',
  },
  nada: {
    intro: {
      ar: 'حي سكني هادئ يغلب عليه طابع العائلات، ويقع ضمن محاور شمال الرياض الرئيسية.',
      en: "A quiet, family-oriented residential district along North Riyadh's main road corridors.",
    },
    faqVariant: 'coverage',
  },
  wadi: {
    intro: {
      ar: 'حي سكني متوسط الكثافة، مغطى بالكامل ضمن شبكة خدماتنا لشمال الرياض.',
      en: 'A medium-density residential district, fully covered within our North Riyadh service network.',
    },
    faqVariant: 'coverage',
  },
  nafal: {
    intro: {
      ar: 'حي فلل مستقر، من الأحياء التي يصلها فريقنا عادة خلال أقل من ساعة.',
      en: 'A stable villa district our team typically reaches in under an hour.',
    },
    faqVariant: 'villa',
  },
  narjis: {
    intro: {
      ar: 'حي يغلب عليه الفلل والعائلات المقيمة، ومن أحياء التغطية الرئيسية لفريقنا.',
      en: 'A district shaped mainly by villas and resident families, and one of our core coverage areas.',
    },
    faqVariant: 'villa',
  },
  qurtubah: {
    intro: {
      ar: 'حي متطور يجمع بين الفلل الحديثة والمجمعات السكنية في شمال الرياض.',
      en: 'A developed district combining modern villas and residential compounds in North Riyadh.',
    },
    faqVariant: 'compound',
  },
  granada: {
    intro: {
      ar: 'حي هادئ نسبيًا، يغلب عليه طابع الفلل العائلية المستقلة.',
      en: 'A relatively quiet district dominated by standalone family villas.',
    },
    faqVariant: 'villa',
  },
  falah: {
    intro: {
      ar: 'حي سكني في شمال الرياض، بمزيج من الفلل والمباني السكنية القديمة نسبيًا.',
      en: 'A North Riyadh residential district with a mix of villas and relatively older residential buildings.',
    },
    faqVariant: 'older',
  },
  ishbiliyah: {
    intro: {
      ar: 'من الأحياء الشرقية ضمن نطاق تغطيتنا، ونصل إليها كجزء من خدمتنا لشمال وشرق الرياض.',
      en: 'One of the eastern districts within our coverage, reached as part of our North and East Riyadh service.',
    },
    faqVariant: 'coverage',
  },
  hittin: {
    intro: {
      ar: 'حي راقٍ يغلب عليه طابع الفلل الحديثة في شمال غرب الرياض.',
      en: 'An upscale district shaped mainly by modern villas in northwest Riyadh.',
    },
    faqVariant: 'compound',
  },
  aqiq: {
    intro: {
      ar: 'حي متطور نسبيًا، بمزيج من الفلل الحديثة والمجمعات السكنية المسورة.',
      en: 'A relatively developed district with a mix of modern villas and gated residential compounds.',
    },
    faqVariant: 'compound',
  },
  sadis: {
    intro: {
      ar: 'حي سكني في شمال الرياض يضم مبانٍ سكنية متفاوتة الأعمار.',
      en: 'A North Riyadh residential district with residential buildings of varying ages.',
    },
    faqVariant: 'older',
  },
};

export function getAreaLocalContent(slug: string): AreaLocalContent {
  return CONTENT[slug] ?? CONTENT.yasmin;
}

/** Previous/next district in the canonical order — used for "nearby districts" cross-links. */
export function getNearbyAreaSlugs(slug: string): string[] {
  const i = AREA_ORDER.indexOf(slug as (typeof AREA_ORDER)[number]);
  if (i === -1) return [];
  const prev = AREA_ORDER[(i - 1 + AREA_ORDER.length) % AREA_ORDER.length];
  const next = AREA_ORDER[(i + 1) % AREA_ORDER.length];
  return [prev, next];
}
