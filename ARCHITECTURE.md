# Arhitektura Projekta - Ugled

## Tehnologije
- **Framework**: Next.js 14.1.0 (React 18.3.1)
- **Jezik**: TypeScript 5.3.3
- **Stilizacija**: Tailwind CSS 3.4.1
- **Animacije**: Framer Motion 12.4.3
- **Validacija**: Zod 3.24.2
- **UI Komponente**: 
  - Lucide React (ikone)
  - React Fast Marquee
  - Sonner (notifikacije)

## Struktura Projekta

### 1. Source (`src/`) Direktorijum
Glavni direktorijum sa izvornim kodom aplikacije, podeljen u nekoliko ključnih sekcija:

#### 1.1 App Direktorijum (`src/app/`)
Next.js App Router struktura sa file-system based routing:
- `page.tsx` - Glavna početna stranica
- `layout.tsx` - Root layout komponenta
- `globals.css` - Globalni stilovi
- Stranice:
  - `/galerija`
  - `/izvoz`
  - `/kontakt`
  - `/o-nama`
  - `/proizvodi`
  - `/usluge`
  - `/privacy-policy`
  - `/terms`

#### 1.2 Komponente (`src/components/`)
Reusable UI komponente:
- `Header/` - Komponente za navigaciju
- `Footer.tsx` - Footer komponenta
- `Hero.tsx` - Hero sekcija
- `BannerHeader.tsx` - Banner komponenta
- `MiniGallery.tsx` - Galerija komponenta
- `WebshopButton.tsx` - Webshop dugme
- `BackButton.tsx` - Dugme za navigaciju nazad
- `webshop/` - Komponente vezane za webshop funkcionalnost

#### 1.3 Konfiguracija (`src/config/`)
JSON fajlovi sa konfiguracijom i sadržajem:
- `home.json` - Konfiguracija početne stranice
- `layout.json` - Opšta konfiguracija layouta
- `icons.ts` - Definicije ikona
- Stranice:
  - `galerija.json`
  - `izvoz.json`
  - `kontakt.json`
  - `o-nama.json`
  - `usluge.json`
- `products/` - Konfiguracija proizvoda

#### 1.4 Biblioteke (`src/lib/`)
Utility funkcije i helpers:
- `iconMapping.ts` - Mapiranje ikona

### 2. Public Direktorijum (`public/`)
Statički fajlovi (slike, fontovi, itd.)

### 3. Konfiguracija Projekta
- `next.config.mjs` - Next.js konfiguracija
- `tailwind.config.ts` - Tailwind CSS konfiguracija
- `postcss.config.js` - PostCSS konfiguracija
- `eslint.config.js` - ESLint pravila
- `tsconfig.json` - TypeScript konfiguracija

## Arhitekturni Paterni

1. **Page-based Routing**
   - Koristi Next.js 14 App Router
   - Svaka stranica je zaseban direktorijum u `app/`
   - Layout pattern za deljenje zajedničkog UI-a

2. **Component-based Architecture**
   - Modularne, reusable komponente
   - Jasna separacija concerns-a
   - Komponente organizovane po funkcionalnosti

3. **Configuration as Data**
   - Sadržaj i konfiguracija odvojeni u JSON fajlove
   - Laka izmena sadržaja bez promene koda
   - Centralizovana konfiguracija u `config/` direktorijumu

4. **Static Site Generation (SSG)**
   - Next.js omogućava statičko generisanje stranica
   - Optimizovane performanse i SEO

5. **Responsive Design**
   - Tailwind CSS za responsive dizajn
   - Mobile-first pristup

## Stilizacija i UI
- Tailwind CSS za utility-first stilizaciju
- Framer Motion za napredne animacije
- Custom komponente za konzistentan UI
- Lucide ikone za konzistentan icon set

## Performanse i Optimizacije
- Next.js image optimizacija
- Static Site Generation
- CSS optimizacija kroz Tailwind
- TypeScript za type safety 