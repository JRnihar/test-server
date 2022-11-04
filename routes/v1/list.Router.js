const express = require("express");
const dataControllers = require("../../controller/data.controllers");
const router = express.Router();

router
    .route("/")
    .post(dataControllers.saveATool)

router
    .route("/:email")
    .get(dataControllers.getSchemaList)

module.exports = router;