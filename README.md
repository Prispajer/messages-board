# 📩 Aplikacja Wiadomości

Aplikacja do zarządzania wiadomościami (dodawanie, edycja, usuwanie).
Frontend: RTK Query + ShadCN UI  
Backend: Node.js + Sequelize (migracje, seedery)

## 🚀 Wymagania
- Node.js v18.17.0+
- Docker v20.10.11+
- Sequelize CLI

## 🔧 Uruchomienie

### Opcja 1 – Docker (zalecane)
```bash
git clone https://github.com/Prispajer/messages-board.git
cd messages-board
docker compose up
```

⚠️ Uwaga: Najnowsze zmiany znajdują się w branchu `dev`.  
Aby pobrać aktualną wersję:  

```bash
git clone -b dev https://github.com/Prispajer/messages-board.git
cd messages-board
docker compose up
```

### Opcja 2 – Lokalnie 

- Podmiana zmiennej środowiskowej w folderze backend (.env)
```
DB_HOST="db" => DB_HOST="localhost"
```

- Zainstaluj zależności:
```
npm install
```

- Uruchom migracje i seedery:
```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

- Start backendu (cd backend):
```
npm run start
```

- Start frontendu (cd frontend):
```
npm run dev
```

## ✅ Checklista
- [x] Formularz dodaje wiadomości do bazy (z walidacją).
- [x] Edycja wiadomości działa (popup).
- [x] Usuwanie wiadomości działa (z potwierdzeniem).
- [x] Brak `sequelize.sync()` – użyte migracje.
- [x] Seeder dodaje min. 3 przykładowe wiadomości (`npx sequelize-cli db:seed:all`).
- [x] Frontend korzysta z RTK Query.
- [x] UI zbudowane z komponentów ShadCN.
- [x] Projekt uruchamia się poprawnie przez `docker compose up`.
- [x] Branch `dev` → PR do `main` gotowy.
- [x] Reviewer @BiznesportTech dodany do repozytorium.

## 📄 Funkcjonalności
- [x] Dodawanie wiadomości (formularz z walidacją)
- [x] Edycja wiadomości (popup)
- [x] Usuwanie wiadomości (z potwierdzeniem)
- [x] Seeder z przykładowymi danymi (`npx sequelize-cli db:seed:all`)
