# Saudi Home Experts — UI/UX Audit & Photorealistic Image Prompts

Prepared for the homepage redesign. Goal: replace emojis/icons with real, believable photography of Saudi homes, culture, and Pakistani-Saudi technicians so a non-technical customer instantly *sees* what the service is. Prompts are written for **DALL·E / ChatGPT / Gemini** (plain natural language, no parameter flags).

---

## Part 1 — Audit

### What the site is today
A Next.js (Arabic-first, RTL) site for on-demand **electrician, plumber, and intercom** service across North Riyadh neighborhoods. Strengths: fast-loading, clear phone/WhatsApp calls-to-action, prayer-time-aware positioning, and a Pakistani-Saudi team story that builds trust. The bones are good.

### The core problem
The entire visual language is built from **emojis and line icons** — ❄️ ⚡ 💧 🚿 🔥 💡 🗺️ 🕌 👨‍🔧 🛡️ 🏠 🇵🇰 🇸🇦 🤝 🔧 and lucide icons. There is **not a single real photograph** on the site (the `public/` folder only contains SVGs and a favicon). For your audience this is the biggest weakness:

- Emojis read as *cheap and generic*, not as a professional 30-year family business.
- A simple end-user scanning fast doesn't decode an abstract icon as fast as a photo of an AC unit, a leaking pipe, or a friendly technician at the door.
- There's no human face anywhere, yet trust is the entire sell ("we come into your home, we respect prayer times").

### The direction
Move to an **image-first layout**: every place that currently uses an emoji or icon becomes a real, warm, photorealistic image. Keep small functional icons (phone, WhatsApp) but make *content* — problems, services, team, trust — photographic.

### Design principles for this audience
1. **One clear message per section.** Cut text roughly in half. A photo + a short headline + one button.
2. **Show the problem, then the fix.** People recognize their own broken AC or flooded floor instantly.
3. **Show real people.** Faces of trustworthy technicians and satisfied Saudi homeowners do more than any warranty badge.
4. **Consistency.** All photos should share the same lighting, warmth, and color treatment so the site feels like one brand, not a stock-photo collage.

### Keep the existing brand colors in every image
- Primary blue `#3B82F6`
- Gold accent `#F59E0B`
- Saudi green `#006C35`
- Emergency red `#EF4444`

Ask the image tool to let these tones appear naturally (a technician's blue-and-gold uniform, green signage, warm interior light) so photos match the UI.

### Section-by-section recommendations

| Section | Today | Change to |
|---|---|---|
| Logo | SVG house + swords | Clean, real-looking wordmark + house/tools symbol (Part 2) |
| Hero | Text + badges only | Full-width photo of a uniformed technician arriving at a Riyadh villa door, homeowner greeting him |
| "What's your problem?" | 6 emoji buttons | 6 real photos: broken AC, tripped breaker, water leak, blocked drain, broken heater, dead lights |
| Why choose us | 6 emoji cards | 6 photos (local map/Riyadh street, van arriving, respectful greeting, experienced tech, warranty handshake, tidy home) |
| Services | ⚡💧🔒 headers | 3 hero photos: electrician at panel, plumber under sink, intercom/camera install |
| Our team | Flag emojis 🇵🇰🤝🇸🇦 | Real photo of the Pakistani-Saudi team together in branded uniforms |
| Reviews | Star icons only | Real (or realistic) photos of Saudi homeowners beside each quote |
| Emergency CTA | Red text block | Keep red, add urgent night-service photo (van headlights, tech on call) |

---

## Part 2 — Image Prompts

**How to use these:** paste one prompt at a time. Generate 3–4 variations, pick the most believable, and regenerate the winners across sections using the same phrasing so the *style stays consistent*. Every prompt already includes photorealism and anti-"AI look" instructions.

**Global style to keep consistent (append to any prompt if a result drifts):**
> Shot on a full-frame DSLR, 35mm lens, natural daylight, realistic skin texture and imperfections, true-to-life colors, subtle depth of field, documentary photography style. Not illustration, not 3D render, not cartoon, no text or watermarks, no distorted hands or faces.

---

### 1. Logo

> Design a clean, modern, professional logo for a home-services company called "Saudi Home Experts" (Arabic: خبراء المنزل السعودي). The mark combines a simple house silhouette with a subtle wrench-and-lightning-bolt symbol integrated into the roofline. Flat vector style, crisp and minimal, on a plain white background. Color palette: deep professional blue (#3B82F6) as the primary color, a Saudi-green (#006C35) accent stripe, and a small gold (#F59E0B) detail. Confident and trustworthy, suitable for a phone screen and a van decal. Balanced, geometric, no gradients, no clutter, high legibility at small sizes.

Variations to try:
> ...same brand, but as a circular badge emblem with the house icon centered and a thin gold ring.
> ...same brand, but a horizontal lockup: icon on the left, room for the company name on the right.

---

### 2. Hero — the arrival moment

> A photorealistic wide shot of a friendly professional home-repair technician arriving at the front door of a modern Saudi villa in a Riyadh residential neighborhood, early evening warm light. The technician is a South-Asian (Pakistani) man in his 30s wearing a clean blue and gold branded work uniform and carrying a tool bag, smiling warmly. A Saudi homeowner in a white thobe opens the door and greets him respectfully. Beige stone villa wall, palm tree, tidy street. Documentary photography, shot on a full-frame DSLR 35mm lens, natural golden-hour light, realistic skin texture, true-to-life colors, shallow depth of field. Not illustration, not 3D, no text, no watermark, natural undistorted hands and faces.

---

### 3. "What's your problem?" — 6 recognizable problem photos

Keep all six in the **same close-up, well-lit, real-home style** so the grid looks uniform.

**AC not cooling (المكيف ما يبرد)**
> Photorealistic close-up of a modern white split-unit air conditioner mounted on the interior wall of a Saudi home, a person's hand holding a remote pointed at it looking concerned, warm indoor light suggesting a hot day. Realistic, documentary style, DSLR, natural texture, no text, no watermark.

**Power keeps cutting (الكهرب يفصل)**
> Photorealistic close-up of a home electrical distribution panel (breaker box) in a Saudi villa with a hand flipping a tripped breaker switch, slight concern, realistic wiring and labels, warm indoor lighting. DSLR documentary style, sharp detail, no text, no watermark.

**Water leaking (المويه تسرب)**
> Photorealistic close-up of water leaking from a pipe under a bathroom or kitchen sink in a modern Saudi home, small puddle on tiled floor, a hand placing a bucket underneath. Realistic reflections and water droplets, DSLR, natural light, documentary style, no text, no watermark.

**Blocked drain (المجاري مسدودة)**
> Photorealistic close-up of a blocked bathroom floor drain with standing water on ceramic tiles in a Saudi home, realistic and clean (not disgusting), a plunger resting nearby. DSLR, natural light, sharp detail, documentary style, no text, no watermark.

**Broken water heater (السخان خربان)**
> Photorealistic close-up of a wall-mounted electric water heater in a Saudi home utility area, a hand checking the temperature dial, realistic metal and pipes, warm indoor light. DSLR, documentary style, true-to-life texture, no text, no watermark.

**Lights not working (اللمبات ما تشتغل)**
> Photorealistic close-up of a hand reaching to a ceiling light fixture or replacing a bulb in a modern Saudi home interior, one light flickering/off, warm ambient evening light. DSLR, documentary style, realistic detail, no text, no watermark.

---

### 4. Services — 3 hero photos

**Electrician (كهربائي)**
> Photorealistic photo of a professional Pakistani electrician in a blue and gold branded uniform working carefully on an electrical panel inside a modern Saudi villa, using a screwdriver and a voltage tester, focused and competent expression, safe and tidy workspace. Warm indoor light. DSLR 35mm, documentary style, realistic skin texture, no text, no watermark, natural hands.

**Plumber (سباك)**
> Photorealistic photo of a professional Pakistani plumber in a blue and gold branded uniform kneeling under a kitchen sink fixing a pipe with a wrench inside a modern Saudi home, tools laid out neatly on a cloth, calm and skilled expression. Natural indoor light. DSLR 35mm, documentary style, realistic detail, no text, no watermark, natural hands.

**Intercom & cameras (انتركوم)**
> Photorealistic photo of a technician in a blue and gold branded uniform installing a modern video intercom / doorbell camera beside the front door of a Saudi villa, mounting it with a drill, beige stone wall, daytime. DSLR 35mm, documentary style, realistic texture, no text, no watermark, natural hands.

---

### 5. Why choose us — 6 supporting photos

> **Local experts:** Photorealistic aerial-ish street view of a North Riyadh residential neighborhood with modern villas, palm-lined streets and clear sky, warm daylight. Realistic, DSLR, no text, no watermark.

> **Fast arrival:** Photorealistic photo of a clean branded service van (blue with gold accents) parked in front of a Saudi villa, a technician stepping out with a tool bag, motion and urgency, daylight. DSLR documentary style, no text, no watermark.

> **Respect your time / prayer-aware:** Photorealistic warm photo of a technician politely waiting and checking his watch outside a Saudi home at dusk near sunset, respectful posture, mosque minaret softly in the far background. DSLR, natural evening light, no text, no watermark.

> **Experienced technicians:** Photorealistic portrait of a confident experienced Pakistani technician in a blue and gold uniform holding professional tools, arms relaxed, friendly trustworthy smile, plain warm background. DSLR 50mm portrait, realistic skin texture, no text, no watermark.

> **Work warranty:** Photorealistic photo of a technician and a Saudi homeowner in a white thobe shaking hands warmly inside a clean modern home after a completed repair, both satisfied. DSLR, natural light, realistic, no text, no watermark.

> **Respect for the home:** Photorealistic photo of a technician kneeling on a protective cloth mat, tidy tools, wearing shoe covers, cleaning up his work area in a spotless modern Saudi living room. DSLR, documentary style, no text, no watermark.

---

### 6. Our team — Pakistani-Saudi trust photo

> Photorealistic group photo of a small friendly home-services team standing together in front of a modern Saudi villa: three or four Pakistani technicians in matching blue and gold branded uniforms alongside a Saudi man in a white thobe, all smiling confidently at the camera, warm daylight, palm trees behind them. Professional but approachable, like a real small-business team photo. DSLR 35mm, realistic skin texture and natural expressions, true-to-life colors, no text, no watermark, natural undistorted faces and hands.

---

### 7. Reviews — realistic customer portraits

Generate three distinct people so each quote feels real.

> **Customer 1 (Mohamed, Al Narjis):** Photorealistic friendly portrait of a Saudi man in his 40s wearing a white thobe and ghutra, smiling naturally at the camera in front of his home doorway, warm daylight. Candid, DSLR 50mm, realistic skin texture, no text, no watermark.

> **Customer 2 (Abdullah, Al Yasmin):** Photorealistic portrait of a younger Saudi man in his early 30s in a white thobe, relaxed genuine smile, modern home interior softly blurred behind him. DSLR 50mm, realistic, natural light, no text, no watermark.

> **Customer 3 (Khalid, Qurtubah):** Photorealistic portrait of a Saudi man in his 50s with a short grey-flecked beard in a white thobe, calm satisfied expression, evening light at his villa entrance. DSLR 50mm, realistic skin texture, no text, no watermark.

---

### 8. Emergency CTA — night urgency

> Photorealistic photo of a branded service van (blue with gold accents) with headlights on, arriving at a Saudi villa at night, a technician stepping out quickly with a flashlight and tool bag, sense of urgent 24/7 emergency help, warm streetlights and dramatic evening mood. DSLR, cinematic but realistic, no text, no watermark, natural hands and face.

---

## Tips to avoid the "too-AI" look
- Always add: *"realistic skin texture with natural imperfections, documentary photography, shot on DSLR, not illustration, not 3D render."*
- Ask for **candid moments**, not stiff posed studio shots.
- Prefer **natural / golden-hour light** over flat even lighting — it reads as real.
- Avoid overly perfect symmetry and glossy plastic skin.
- Regenerate any image with distorted hands, extra fingers, or fake-looking text on uniforms/signs.
- Keep the **same technician's uniform (blue + gold)** across every photo for brand consistency.
- Generate a few extra frames and pick the least "perfect" one — small realistic flaws sell authenticity.
