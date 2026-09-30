# API de Usuários — Express + Sequelize + Swagger

## Como rodar
1. `npm install`
2. Copie `.env.example` para `.env` e preencha com os dados do BD (página inicial da UC).
3. Se as tabelas não existirem, rode o `schema.sql` no MySQL.
4. `npm start` (ou `npm run dev`)
5. Abra http://localhost:3000/api-docs

## Autenticação (em memória)
`POST /api/v1/auth/login` com `{"username":"admin","password":"admin123"}` (ou `user` / `user123`).
Use o token em **Authorize** no Swagger.

- GET: livre
- POST / PUT: user ou admin
- DELETE: somente admin
