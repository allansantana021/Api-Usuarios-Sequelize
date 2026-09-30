const express = require("express");
const { login } = require("../middlewares/auth");

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body || {};
  const token = login(username, password);
  if (!token) return res.status(401).json({ message: "Credenciais invalidas" });
  res.json({ token });
});

module.exports = router;
