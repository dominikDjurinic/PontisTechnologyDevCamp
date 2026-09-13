# Sedma domaća zadaća @ Pontis Technology DevCamp 2026

## Upute za pokretanje

- **Next.js:**

1. Preuzmite mapu `dz-7`
2. Otvorite terminal i pozicionirajte se u preuzetoj mapi

   ```bash
   cd dz-7
   ```

3. Pokrenite aplikaciju u dev modelu
   Instalirajte potrebne biblioteke iz `package.json` korištenjem naredbe

   ```bash
    npm install
   ```

   - dev model rada<br/><br/>

   ```bash
    npm run dev
   ```

## Rezultat Profilera

1. Prije uvođenja memoizacije
   ListByQuery je narančast u Profileru i traje oko 2.4ms jer se cijela komponenta ponovno renderira kao i svi HTML elementi djeca u .map funkciji.

   Promjena stanja roditelja pokreće re-render roditelja, a posljedično i re-render djece.

2. Nakon uvođenja memoizacije - `ListItem`
   ListByQuery je žut u Profileru i traje oko 1.4ms jer dobiva novi niz podataka nakon unosa nove stavke (mutacije).

   Stari ListItem elementi su sivi u Profileru, što znači da nije došlo do re-rendera elemenata, osim nove stavke.

   Nakon memoizacije, promjena stanja roditelja više ne uzrokuje re-render djece ako nije došlo do promjene podataka (props).
