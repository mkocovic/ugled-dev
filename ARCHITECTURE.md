<<<<<<< HEAD
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
=======
# Ugled - Arhitektura Projekta

## Pregled
Ugled je moderna web aplikacija izgrađena koristeći Next.js 14, TypeScript i Tailwind CSS. Aplikacija prati najbolje prakse moderne web razvoja i koristi App Router arhitekturu Next.js-a.

## Tehnološki Stack

### Glavne Tehnologije
- **Framework**: Next.js 14
- **Programski Jezik**: TypeScript
- **Styling**: Tailwind CSS
- **Animacije**: Framer Motion
- **Ikonice**: Lucide React
- **Validacija Formi**: Zod
- **Notifikacije**: Sonner
- **Marquee Efekti**: React Fast Marquee

### Development Alati
- ESLint za linting
- PostCSS za CSS procesiranje
- TypeScript za type checking
- Next.js development server

## Struktura Projekta

```
ugled/
├── src/
│   ├── app/                    # Next.js App Router stranice
│   │   ├── page.tsx           # Početna stranica
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Globalni stilovi
│   │   ├── usluge/            # Stranica usluga
│   │   ├── proizvodi/         # Stranica proizvoda
│   │   ├── o-nama/            # Stranica o nama
│   │   ├── kontakt/           # Kontakt stranica
│   │   ├── izvoz/             # Stranica izvoza
│   │   └── galerija/          # Stranica galerije
│   │
│   ├── components/            # Ponovno korišteni UI komponenti
│   │   ├── Header/           # Header komponenta
│   │   ├── MiniGallery.tsx   # Galerija komponenta
│   │   ├── Hero.tsx          # Hero sekcija
│   │   ├── Footer.tsx        # Footer komponenta
│   │   ├── BannerHeader.tsx  # Banner komponenta
│   │   └── BackButton.tsx    # Navigacijski button
│   │
│   ├── lib/                   # Utility funkcije i shared logika
│   │   └── iconMapping.ts     # Icon mapping utilities
│   │
│   └── config/                # Konfiguracija i sadržaj
│       ├── products/          # Konfiguracija proizvoda
│       ├── usluge.json        # Podaci o uslugama
│       ├── o-nama.json        # Podaci o nama
│       ├── layout.json        # Konfiguracija layouta
│       ├── kontakt.json       # Kontakt informacije
│       ├── izvoz.json         # Podaci o izvozu
│       ├── icons.ts           # Konfiguracija ikonica
│       ├── home.json          # Sadržaj početne stranice
│       └── galerija.json      # Podaci galerije
│
├── public/                    # Statički assets
├── next.config.mjs           # Next.js konfiguracija
├── tailwind.config.ts        # Tailwind CSS konfiguracija
├── tsconfig.json             # TypeScript konfiguracija
└── package.json              # Projektne dependencies
```

## Arhitekturni Obrasci

### 1. App Router Arhitektura
- Koristi Next.js 14 App Router za file-based rutiranje
- Svaka ruta ima svoj direktorij s page.tsx
- Dijeljeni layout kroz layout.tsx
- Optimizirano za server-side rendering i static generation

### 2. Component-Based Arhitektura
- Modularne komponente u components direktoriju
- Ponovno korišteni UI elementi (Header, Footer, Hero sekcije)
- Jasna separacija odgovornosti s dedicated component direktorijima
- TypeScript za type safety komponenti

### 3. Upravljanje Podacima
- JSON-based content management u config direktoriju
- Odvojene konfiguracijske datoteke za svaku sekciju
- Strukturirani podaci za usluge, proizvode i galeriju
- Lako održavanje i ažuriranje sadržaja

### 4. Styling Pristup
- Tailwind CSS za utility-first styling
- Globalni stilovi u globals.css
- Responsive design podrška
- Modularni CSS pristup

### 5. Type Safety
- TypeScript implementacija kroz cijeli projekt
- Type definicije za komponente i strukture podataka
- Compile-time type checking

### 6. Performance Optimizacije
- Next.js built-in optimizacije
- Component-based code splitting
- Optimizacija statičkih assets-a
- Image optimization kroz Next.js Image komponentu

## Content Management

### JSON-Based CMS
- Strukturirani JSON fajlovi za svaku sekciju
- Lako održavanje i ažuriranje sadržaja
- Separacija sadržaja od koda
- TypeScript interface-i za validaciju podataka

### Konfiguracijske Datoteke
- `layout.json`: Konfiguracija layouta i navigacije
- `home.json`: Sadržaj početne stranice
- `usluge.json`: Podaci o uslugama
- `proizvodi/`: Direktorij s konfiguracijama proizvoda
- `galerija.json`: Podaci o galeriji
- `kontakt.json`: Kontakt informacije
- `izvoz.json`: Podaci o izvozu

## Best Practices

### Kod
- TypeScript za type safety
- ESLint za code quality
- Modularna arhitektura
- Clean code principi

### Performance
- Optimizacija slika
- Code splitting
- Lazy loading
- Caching strategije

### SEO
- Meta tagovi
- Semantic HTML
- Optimizacija za pretraživače
- Sitemap generacija

### Security
- TypeScript za type safety
- Input validacija
- XSS zaštita
- CSRF zaštita

## Development Workflow

### Lokalni Development
1. `npm install` - Instalacija dependencies-a
2. `npm run dev` - Pokretanje development servera
3. `npm run build` - Build produkcijske verzije
4. `npm run start` - Pokretanje produkcijskog servera

### Code Quality
- ESLint za linting
- TypeScript za type checking
- Prettier za code formatting
- Git hooks za pre-commit validaciju

## Deployment
- Optimizovana produkcijska build
- Static export opcija
- Server-side rendering podrška
- Environment varijable konfiguracija 
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
