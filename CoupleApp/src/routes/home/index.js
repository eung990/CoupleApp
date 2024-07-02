"use strict";

const express = require("express");
const router = express.Router();

const CTRL = require("../../../bin/controller/UserController.js");

router.get("/", CTRL.login);

router.get("/Sign", CTRL.sign);

module.exports = router;