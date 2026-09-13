# Šesta domaća zadaća @ Pontis Technology DevCamp 2026

Domaća zadaća iz drugog predavanja Backend (BE2).

## Zadatak

Zadatak je bio izraditi Book Store REST API pomoću Express.js biblioteke koji obavlja CRUD operacije prema bazi podataka. Za komunikaciju prema bazi koristimo Prisma ORM i SQLite. Također smo izvršili reimplementaciju komunikacije u NoSQL obliku koristeći MongoDB i Mongoose.

## Upute za pokretanje

1. Preuzmite mapu `dz-6`

### Prisma-api

2. Otvorite terminal i pozicionirajte se u preuzetoj mapi i podmapi `prisma-api`

   ```bash
   cd dz-6
   cd prisma-api
   ```
   (u .env datoteku dodati DATABASE_URL="file:./dev.db" i PORT=3000)

3. Instalirajte potrebne biblioteke iz `package.json` naredbom

   ```bash
   npm install
   ```
   (izvršavanje naredbe osim instalacije biblioteka, stvara SQLite bazu podataka i unosi početne podatke - seed)

4. Pokrenite server naredbom

   ```bash
   npm run dev
   ```

### Mongoose-api

2. Otvorite terminal i pozicionirajte se u preuzetoj mapi i podmapi `mongoose-api`

   ```bash
   cd dz-6
   cd mongoose-api
   ```

3. Instalirajte potrebne biblioteke iz `package.json` naredbom

   ```bash
   npm install
   ```

4. Pokrenite MongoDB bazu podataka books pomoću Docker-a

   ```bash
   docker run -d --name mongo-books -p 27017:27017 mongo:latest
   ```

   (u .env datoteku dodati MONGO_URI=mongodb://localhost:27017/books i PORT=3000)

5. Povezivanje na MongoDB i seed s podacima
   
   ```bash
   npm run seed
   ```

6. Pokrenite server naredbom

   ```bash
   npm run dev
   ```
   

## Testiranje ispravnosti rada API

Za testiranje rada Books Store REST API izrađena je Postman kolekcija `postman-collection.json` koju je moguće izravno unijeti u Postman aplikaciju i pokrenuti njeno izvođenje. Kolekcija sadrži rubne slučajeve za testiranje ispravnosti rada.
