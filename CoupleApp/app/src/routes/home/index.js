"use strict";

const express = require("express");
const router = express.Router();

const CTRL = require("../../../bin/controller/UserController.js");

router.get("/", CTRL.output.login);
router.get("/Sign", CTRL.output.sign);

router.post("/board", CTRL.input.login);

module.exports = router;