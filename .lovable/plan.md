## 1. Fix build error (blocking)

`src/components/SkillIcon.tsx` imports `SiTableau` from `react-icons/si`, which no longer exists in the installed version. Tableau is not used in the switch anymore.

- Remove `SiTableau` (and other unused icon imports: `SiGooglesheets`, `SiMake`, `SiN8N`, `SiNumpy`, `SiPandas`, `SiPlotly`, `SiPython`, `SiZapier`, `DiDatabase`, `Mic`) from the import list.

## 2. Navigation (`src/components/Navigation.tsx`)

Replace nav items with:
`Home · About · Stack · Case Studies · Experience · Testimonials`

- `Stack` → `#skills`, `Case Studies` → `#projects`, `Experience` → `#experience` (re-add the Experience section back into `Index.tsx` so the anchor exists; if user wants it kept removed, we keep the link pointing to projects — defaulting to re-adding since they listed Experience).
- Tighten spacing, refine active-pill style, keep current palette.

> Note: Experience section was previously deleted. I will recreate a minimal `Experience.tsx` (role + company + dates list) and re-mount it in `Index.tsx`.

## 3. Hero (`src/components/Hero.tsx`) — full redesign

- **Eyebrow tag:** "Available for full-time roles · UAE"
- **Title:** `AI Automation Engineer` (bold, large, technical — no typewriter rotation).
- **Description:**
  "Saving time is saving money — I build AI-powered workflows using **n8n**, **LangChain**, and **APIs** to automate operations, streamline internal business processes, and help businesses **save time** and cut costs."
  Bold keywords: n8n, LangChain, APIs, save time.
- **CTAs:** `View Case Studies` (→ #projects) and `Contact Me` (→ #contact).
- **Stats (3):** `30+ Projects Completed`, `AI Workflow Systems`, `API Integrations Built`.
- **Social icons:** keep only LinkedIn, YouTube (https://www.youtube.com/@AbdallahHelalAI), Linktree (https://linktr.ee/abdallah.helal), DataCamp. Remove GitHub, Upwork, Kaptale, LeetCode, etc.
- **Profile area:** keep current professional photo, add floating pill badges around it (`n8n`, `LangChain`, `OpenAI`, `AI Agents`, `APIs`, `Automation`) with subtle float animation, plus a soft grid/glow backdrop for an AI-infrastructure feel.
- Tighter vertical rhythm, denser content, premium typography hierarchy, semantic color tokens only (no hardcoded hex).

## 4. About (`src/components/About.tsx`) — full redesign

- **Title:** `AI Systems & Automation Solutions`
- **Description:** "I design **AI-powered systems** that help businesses **automate operations**, **streamline workflows**, integrate tools, and **reduce manual work** using modern **AI** and **automation** technologies." (bolded keywords as shown)
- **Replace 5 old cards with 4 new premium cards:**
  1. **AI Workflow Automation** — n8n workflows, repetitive ops, app/API/DB connections, save time.
  2. **AI Agents & Chat Systems** — AI customer support, LangChain + OpenAI, multi-step AI workflows, WhatsApp/CRM automation.
  3. **Business Systems Integration** — API integrations, internal ops automation, centralized workflows, team automation.
  4. **Data & AI Solutions** — Python automation, scraping & pipelines, AI-enhanced insights, reporting analytics.
- **Stats (3):** `30+ AI Projects`, `Automation Systems Delivered`, `Business Workflow Integrations`.
- Premium card style: soft shadow, rounded-2xl, gradient icon chip, hover lift + border-accent transition, framer-motion–style transitions via Tailwind.
- Remove "Available for new projects" freelance-ish pill; replace with enterprise-ready tagline.

## 5. Design system polish

- Use only semantic tokens (`text-foreground`, `bg-card`, `text-accent`, etc.) — no more `#F17C58` hardcoded in Hero/About/Nav.
- Keep current palette (teal `#155263` primary, coral `#FF6F3C` accent, orange `#FF9A3C` secondary).
- Improve responsive breakpoints, denser hero on mobile, refined spacing scale.

## Files touched

- `src/components/SkillIcon.tsx` (fix imports)
- `src/components/Navigation.tsx` (nav items + spacing)
- `src/components/Hero.tsx` (full rewrite)
- `src/components/About.tsx` (full rewrite)
- `src/components/Experience.tsx` (recreate, minimal)
- `src/pages/Index.tsx` (re-mount Experience)

No backend/data changes. Existing color palette preserved.