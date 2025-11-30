const express = require("express");
const router = express.Router();
const torneosController = require("../controllers/torneos_controller");

router.get("/", torneosController.getTorneos);

module.exports = router;
