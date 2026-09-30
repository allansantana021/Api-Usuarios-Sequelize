module.exports = (err, req, res, next) => {
  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(409).json({ message: "Email ou CPF ja cadastrado" });
  }
  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({ message: err.errors.map((e) => e.message).join(", ") });
  }
  console.error(err);
  res.status(500).json({ message: "Erro interno do servidor" });
};
