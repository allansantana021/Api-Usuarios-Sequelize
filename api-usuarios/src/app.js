require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const db = require("./database/models");
const usuariosRoutes = require("./routes/usuarios.routes");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middlewares/errorHandler");

db.sequelize
  .authenticate()
  .then(() => console.log("DB conectado com sucesso!"))
  .catch((err) => console.error("Erro ao conectar no DB:", err.message));

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/usuarios", usuariosRoutes);

app.use(errorHandler);

module.exports = app;
