// Autenticação em memória (conforme a apostila da Aula 5).
const crypto = require("crypto");

const usersInMemory = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" },
];

const sessions = new Map(); // token -> { username, role }

function login(username, password) {
  const found = usersInMemory.find((u) => u.username === username && u.password === password);
  if (!found) return null;
  const token = crypto.randomUUID();
  sessions.set(token, { username: found.username, role: found.role });
  return token;
}

function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const [type, token] = header.split(" ");
  if (type !== "Bearer" || !sessions.has(token)) {
    return res.status(401).json({ message: "Nao autenticado" });
  }
  req.user = sessions.get(token);
  next();
}

module.exports = auth;
module.exports.login = login;
