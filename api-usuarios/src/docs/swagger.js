const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuários",
      version: "1.0.0",
      description: "Documentação da API desenvolvida com Express e Sequelize",
    },
    servers: [{ url: "http://localhost:3000", description: "Servidor local" }],
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer" },
      },
      schemas: {
        UsuarioInput: {
          type: "object",
          required: ["nome", "email", "senha"],
          properties: {
            nome: { type: "string", example: "Ana Silva" },
            email: { type: "string", example: "ana@teste.com" },
            senha: { type: "string", example: "123456" },
            cpf: { type: "string", example: "111.222.333-44" },
            rg: { type: "string", example: "12.345.678-9" },
            dataNascimento: { type: "string", format: "date", example: "1995-08-20" },
          },
        },
        UsuarioUpdate: {
          type: "object",
          properties: {
            nome: { type: "string", example: "Ana Silva" },
            email: { type: "string", example: "ana@teste.com" },
            senha: { type: "string", example: "123456" },
            cpf: { type: "string", example: "111.222.333-44" },
            rg: { type: "string", example: "12.345.678-9" },
            dataNascimento: { type: "string", format: "date", example: "1995-08-20" },
          },
        },
        Usuario: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            nome: { type: "string", example: "Ana Silva" },
            email: { type: "string", example: "ana@teste.com" },
            cpf: { type: "string", example: "111.222.333-44" },
            rg: { type: "string", example: "12.345.678-9" },
            dataNascimento: { type: "string", format: "date", example: "1995-08-20" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
            enderecos: { type: "array", items: { type: "object" } },
            contatos: { type: "array", items: { type: "object" } },
          },
        },
      },
    },
  },
  apis: [path.join(__dirname, "*.docs.js").replace(/\\/g, "/")],
};

module.exports = swaggerJsdoc(options);
