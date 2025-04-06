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