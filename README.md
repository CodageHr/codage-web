# Codage Web Aplikacija

Dobrodošli u Codage web aplikaciju, izgrađenu pomoću Next.js 16, React 19, MUI 9 i Node.js 22.

> Backend (Laravel) je u **zasebnom repozitoriju**. Ovaj frontend komunicira s njim
> preko HTTP-a putem `NEXT_PUBLIC_BACKEND_HOST_API` varijable (vidi `.env.example`).

## Instalacija

1. Prvo, instalirajte Node.js verziju 22 (vidi `.nvmrc`). Preporučljivo je koristiti [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) za upravljanje verzijama Node.js-a.

```bash
nvm install 22
nvm use 22
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

## Pokretanje putem Dockera

Alternativno, aplikaciju možete pokrenuti u Dockeru (Next.js dev server u kontejneru,
s hot-reloadom). Backend se **ne** pokreće ovdje — on je u zasebnom repozitoriju.

1. Kopirajte primjer okolišnih varijabli i popunite ih:

```bash
cp .env.example .env
```

2. Pokrenite kontejner:

```bash
./docker-start            # pokretanje
./docker-start --build    # prisilni rebuild
./docker-stop             # zaustavljanje
```

Aplikacija će biti dostupna na `http://localhost:8082` (port se može promijeniti
putem `APP_FRONT_PORT` u `.env`).

Za lokalni razvoj protiv Laravel backenda koji se vrti iz svog repozitorija, pogledajte
zakomentirane `networks` upute u `docker-compose.yml`.

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
