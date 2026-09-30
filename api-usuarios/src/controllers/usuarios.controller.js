const service = require("../services/usuarios.service");

async function list(req, res, next) {
  try {
    res.json(await service.list());
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const data = await service.get(req.params.id);
    if (!data) return res.status(404).json({ message: "Usuario nao encontrado" });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { nome, email, senha } = req.body || {};
    if (!nome || !email || !senha) {
      return res.status(400).json({ message: "nome, email e senha sao obrigatorios" });
    }
    const created = await service.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const updated = await service.update(req.params.id, req.body || {});
    if (!updated) return res.status(404).json({ message: "Usuario nao encontrado" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const ok = await service.remove(req.params.id);
    if (!ok) return res.status(404).json({ message: "Usuario nao encontrado" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { list, getById, create, update, remove };
