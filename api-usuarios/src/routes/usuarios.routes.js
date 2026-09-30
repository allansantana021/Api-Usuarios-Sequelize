const express = require("express");
const controller = require("../controllers/usuarios.controller");
const auth = require("../middlewares/auth");
const authorize = require("../middlewares/authorize");

const router = express.Router();

router.get("/", controller.list);

router.get("/:id", controller.getById);

router.post("/", auth, authorize(["user", "admin"]), controller.create);

router.put("/:id", auth, authorize(["user", "admin"]), controller.update);

router.delete("/:id", auth, authorize(["admin"]), controller.remove);

module.exports = router;
