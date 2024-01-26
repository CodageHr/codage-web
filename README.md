# Codage Web Aplikacija

Dobrodošli u Codage web aplikaciju, izgrađenu pomoću Next.js i Node.js 18.19.0.

## Instalacija

1. Prvo, instalirajte Node.js verziju 18.19.0. Preporučljivo je koristiti [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) za upravljanje verzijama Node.js-a.

```bash
nvm install 18.19.0
nvm use 18.19.0
```

2. Klonirajte repozitorij:

```bash
git clone git@github.com:CodageHr/codage-web.git
cd codage-web
```

3. Instalirajte ovisnosti:

```bash
npm install
```

## Pokretanje

Pokrenite Next.js aplikaciju lokalno:

```bash
npm run dev
```

Aplikacija će biti dostupna na `http://localhost:8082`.

## Struktura Projekta

```plaintext
├── public/         # Statični resursi (slike, CSS, itd.)
├── src/            # Izvorni kod aplikacije
│   ├── app/        # Stranice Next.js aplikacije
│   ├── api/           # API rute i logika
│   ├── assets/        # Statični resursi (slike, CSS, itd.)
│   ├── auth/          # Autentikacija i autorizacija
│   ├── hooks/         # Custom React hooks
│   ├── layout/        # Layout komponente
│   ├── locales/       # Prijevodi
│   ├── routes/        # Rute aplikacije i kuke
│   ├── sections/      # Sekcije stranica aplikacije
│   ├── theme/         # Tema aplikacije i konfiguracija
│   ├── types/         # TypeScript tipovi
│   ├── utils/         # Pomoćne funkcije
│   └── components/    # Reusable React komponente
├── .env               # Lokalne varijable okoline (npr. API ključevi)
├── next.config.js     # Konfiguracija Next.js
├── package.json       # Ovisnosti i skripte
└── README.md          # Dokumentacija projekta
```

## Konfiguracija

- Ukoliko je potrebno, konfigurirajte postavke aplikacije u `next.config.js`.
- Postavke okoline mogu se dodati u `.env`.

---

Sretno s izradom Codage web aplikacije! 🚀
