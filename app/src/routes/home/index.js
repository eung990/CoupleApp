"use strict";

const express = require("express");
const router = express.Router();

const CTRL = require("../../controller/UserController");

router.get("/", CTRL.output.login);
router.get("/Sign", CTRL.output.sign);
router.get("/board", CTRL.output.board);
router.get("/Map", CTRL.output.Map);
router.get("/session", CTRL.output.session);

router.post("/login", CTRL.input.login);
router.post("/sign", CTRL.input.sign);

module.exports = router;