const bcrypt = require("bcryptjs");
const repo = require("../repositories/usuarios.repository");

function list() {
  return repo.findAll();
}

function get(id) {
  return repo.findById(id);
}

async function create(payload) {
  const senha = await bcrypt.hash(payload.senha, 10);
  const novo = await repo.create({ ...payload, senha });
  return repo.findById(novo.id);
}

async function update(id, payload) {
  const data = { ...payload };
  delete data.id;
  if (data.senha) {
    data.senha = await bcrypt.hash(data.senha, 10);
  }
  const existe = await repo.findById(id);
  if (!existe) return null;
  if (Object.keys(data).length > 0) await repo.update(id, data);
  return repo.findById(id);
}

async function remove(id) {
  const affected = await repo.remove(id);
  return affected > 0;
}

module.exports = { list, get, create, update, remove };
