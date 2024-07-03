"use strict";

const express = require("express");
const router = express.Router();

const CTRL = require("../../controller/UserController");

router.get("/", CTRL.output.login);
router.get("/Sign", CTRL.output.sign);

router.post("/board", CTRL.input.login);
router.post("/login", CTRL.input.sign);

module.exports = router;