# README

## BACKEND

- `mkdir backend && cd backend && npm init -y && npm i express mysql cors dotenv @prisma/client && npm i -D prisma nodemon && npx prisma init`
- add `"start": "nodemon index.js` script and `"type": "module"` in `package.json`
- add `DATABASE_URL="mysql://admin:admin1234@localhost:3306/db_ujk"` in `.env`
- update `schema.prisma`
- `npx prisma migrate dev`
- update `index.js`
- `npm start`
- `mkdir controller routes && touch controller/siswaController.js routes/siswaRoute.js`
- update `siswaRoute.js`
- update `siswaController.js`
