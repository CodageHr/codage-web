# Deploy & SEO checklist

Operativni vodič: kako pustiti `codage.hr` u produkciju i **natjerati tražilice i AI
agente da indeksiraju stranicu**. Kod je već optimiziran (statički render, per-page
meta/canonical, JSON-LD, robots, sitemap, llms.txt, IndexNow) — ovdje su koraci koje
**mora napraviti čovjek** jer se ne mogu automatizirati iz repoa.

> Poredaj po redu. Koraci 1–4 su obavezni da stranica uopće bude vidljiva; 5–7 ubrzavaju
> i pojačavaju vidljivost.

---

## 0. Prije deploya (u repou)

- [ ] `npm run ts` — bez grešaka
- [ ] `npm run lint` — bez grešaka
- [ ] `npm run build` — prolazi; sve rute su `○ (Static)` (naslovnica, about-us,
      contact-us, 4 pravne, `robots.txt`, `sitemap.xml`)
- [ ] `redesign` grana mergeana u `main` (ili deployaš direktno `redesign` — po dogovoru)

**Produkcijski env** (postavi na hostu / u CI-ju — NE commitati `.env`):

| Varijabla | Vrijednost | Zašto |
|---|---|---|
| `NEXT_APP_HOST` | `https://codage.hr` | Baza za canonical, sitemap, OG, JSON-LD. **Mora biti točna** — kriva vrijednost pošalje Google na krivu domenu. |
| `NEXT_PUBLIC_BACKEND_HOST_API` | `https://api.codage.hr` | Kontakt forma šalje ovamo (Laravel, zaseban repo). |
| `NEXT_PUBLIC_GA_TRACKING_ID` | `G-YHXCF8V5F5` | Google Analytics (već default u kodu; override po želji). |

> ⚠️ Kontakt forma šalje nova polja (`name`, `company`, `phone`). Provjeri da backend
> (`/api/contact-form`) prihvaća/prosljeđuje ta polja — inače se tiho gube.

---

## 1. Deploy na produkciju (Vercel iza Cloudflarea)

Setup: **Cloudflare** drži DNS (nameserveri `*.ns.cloudflare.com`), proxied (narančasti
oblak) → origin je **Vercel**. Vercel deploya iz GitHuba (push na produkcijsku granu).

- [ ] Env varijable iz koraka 0 postavljene u **Vercel → Project → Settings →
      Environment Variables** (za *Production*), pa **Redeploy**
- [ ] Produkcijski deploy nije iza Vercel **Deployment Protection** (password/preview
      gate) — inače botovi ne mogu do stranice

**⚠️ Kanonski smjer domene — apex, ne www.** Canonical/sitemap/OG/JSON-LD u kodu koriste
`https://codage.hr` **bez `www`**. Infra MORA slati u istom smjeru, inače canonical
pokazuje na URL koji se redirecta (proturječan signal → loša indeksacija).

- [ ] **Vercel → Settings → Domains**: `codage.hr` = **Primary (No Redirect)**;
      `www.codage.hr` = **Redirect → `codage.hr`** (308). *(Redirect radi Vercel — 308
      na apexu ima `x-vercel-id` — pa se mijenja ovdje, ne u Cloudflareu.)*
- [ ] **Cloudflare → SSL/TLS → Overview = Full (strict)**. Nikako *Flexible* — s Vercelom
      Flexible radi beskonačni redirect loop.
- [ ] **Cloudflare → DNS**: apex + `www` ostaju proxied na Vercel — ništa ne mijenjati.
- [ ] Ako apex i dalje ide na www: **Cloudflare → Rules → Redirect Rules / Page Rules** →
      ukloni zaostalo „redirect to www" pravilo.
- [ ] Nakon deploya: **Cloudflare → Caching → Purge Everything** (izbriši stari HTML/asset cache)

Provjera smjera (nakon flipa):

```bash
curl -sSI https://www.codage.hr | grep -iE 'HTTP|location'   # → 308 … location: https://codage.hr/
curl -sSI https://codage.hr     | grep -i  HTTP              # → 200
```

---

## 2. Provjera nakon deploya (2 min, iz terminala)

Zamijeni `codage.hr` ako testiraš staging. Sve mora vraćati **200** i **produkcijsku** domenu:

```bash
# Canonical mora pokazivati na SVOJU stranicu (ne sve na "/")
for u in / /about-us/ /contact-us/ /privacy-policy/; do
  echo "## $u"; curl -s "https://codage.hr$u" | grep -oE '<link rel="canonical" href="[^"]*"'
done

# robots + sitemap + llms + IndexNow ključ
curl -sI https://codage.hr/robots.txt   | head -1
curl -s  https://codage.hr/sitemap.xml  | grep -c '<loc>'          # očekivano: 7
curl -sI https://codage.hr/llms.txt      | head -1
curl -sI https://codage.hr/710caab854f648a7d30f6d001181c944.txt | head -1   # IndexNow key → 200

# JSON-LD prisutan
curl -s https://codage.hr/ | grep -c 'application/ld+json'         # očekivano: ≥1
```

- [ ] Canonical na svakoj stranici pokazuje na **tu** stranicu (`/about-us/` → `…/about-us/`)
- [ ] `sitemap.xml` vraća **7** URL-ova, svi s završnim `/`
- [ ] IndexNow ključ (`…944.txt`) vraća **200**

---

## 3. Google Search Console (OBAVEZNO)

Bez ovoga Google **ne zna** da stranica postoji.

1. [ ] <https://search.google.com/search-console> → **Add property** → **Domain** → `codage.hr`
2. [ ] Verifikacija preko **DNS TXT** zapisa (kod registrara domene). Domain property
       pokriva i `www` i `http/https` odjednom.
3. [ ] **Sitemaps** → dodaj `sitemap.xml` → Submit
4. [ ] **URL Inspection** → zalijepi `https://codage.hr/` → **Request indexing**
       (ponovi za `/about-us/` i `/contact-us/`)
5. [ ] Za par dana provjeri **Pages** → jesu li stranice „Indexed" (i riješi eventualne
       „Excluded" razloge)

---

## 4. Bing Webmaster Tools (OBAVEZNO — feeda i ChatGPT Search / Copilot)

Bingov indeks koriste Bing, Copilot, ChatGPT Search i dijelom Perplexity — bitno za AI vidljivost.

1. [ ] <https://www.bing.com/webmasters> → **Import from Google Search Console**
       (najbrže) *ili* dodaj `codage.hr` ručno + verificiraj
2. [ ] **Sitemaps** → submit `https://codage.hr/sitemap.xml`

---

## 5. IndexNow ping (instant, ponovi nakon svakog deploya)

Trenutno javlja Bing/Yandex/Seznam da su URL-ovi novi/promijenjeni. Ključ već serviramo
na `/710caab854f648a7d30f6d001181c944.txt`.

> **Vercel napomena:** skripta se **ne izvršava na Vercelu**. Ona samo pročita javni
> `https://codage.hr/sitemap.xml` i pošalje POST na `api.indexnow.org` — pa ide s bilo
> kojeg mjesta s Node-om (laptop ili GitHub Action), **nakon** što je deploy live.

**A) Ručno (0 setupa):**

```bash
npm run indexnow      # pročita živi sitemap i pingne sve URL-ove
```

- [ ] Vrati `200 OK (7 URLs)`

**B) Automatski nakon svakog Vercel deploya** — GitHub Action
[`.github/workflows/indexnow.yml`](../.github/workflows/indexnow.yml) okida se na
`deployment_status: success` (tj. kad je Vercel deploy stvarno live) i pozove IndexNow.
Ništa za postaviti — radi čim je mergean u granu koju Vercel deploya.

---

## 6. Google Business Profile (najveći efekt za lokalni „…Split")

1. [ ] <https://business.google.com> → kreiraj/preuzmi profil **Codage d.o.o.** (Split)
2. [ ] Kategorija: *Software company* / *Website designer*; dodaj `https://codage.hr`,
       telefon `+385 98 403 330`, radno vrijeme, adresu
3. [ ] Verifikacija (razglednica / telefon / e-mail)

> Ovo najviše diže pojavljivanje na upite tipa „izrada aplikacija Split" i Google Maps.

---

## 7. Nice-to-have

- [ ] **OG pregled**: zalijepi `https://codage.hr` u
      [opengraph.xyz](https://www.opengraph.xyz) — provjeri da se `og-image.png`
      (1200×630) prikazuje i da je naslov po stranici točan
- [ ] **Lighthouse na produkciji**: Chrome DevTools → Lighthouse → Mobile → provjeri
      da su Performance/SEO/Best-practices/Accessibility u zelenom
- [ ] **Backlinkovi**: profili (Clutch, LinkedIn firma, GitHub org), lokalni imenici —
      ubrzavaju „discovery" i grade autoritet domene

---

## Kada ponoviti (nakon promjena sadržaja)

| Promjena | Napravi |
|---|---|
| Nova stranica/ruta | Dodaj u `src/app/sitemap.ts` → deploy → `npm run indexnow` → GSC „Request indexing" |
| Veća izmjena teksta | `npm run indexnow` (dovoljno) |
| Promjena domene/URL-ova | Ažuriraj `NEXT_APP_HOST`, canonical, 301 redirecte, pa GSC + Bing sitemap ponovo |

---

### Gdje što živi u kodu

- Robots — [`src/app/robots.ts`](../src/app/robots.ts)
- Sitemap — [`src/app/sitemap.ts`](../src/app/sitemap.ts)
- JSON-LD — [`src/components/structured-data.tsx`](../src/components/structured-data.tsx),
  [`src/components/breadcrumb-jsonld.tsx`](../src/components/breadcrumb-jsonld.tsx)
- Per-page meta/canonical — `metadata` export u svakom `src/app/**/page.tsx`
- Globalni OG/ikone/`metadataBase` — [`src/app/layout.tsx`](../src/app/layout.tsx)
- AI agenti — [`public/llms.txt`](../public/llms.txt)
- IndexNow — [`scripts/indexnow.mjs`](../scripts/indexnow.mjs) (`npm run indexnow`),
  ključ `public/710caab854f648a7d30f6d001181c944.txt`
