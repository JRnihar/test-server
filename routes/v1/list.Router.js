const express = require("express");
const dataControllers = require("../../controller/data.controllers");
const router = express.Router();

router
    .route("/")
    .post(dataControllers.saveATool)
    // .get(dataControllers.getSchemaList)
router
    .route("/:email")
    // .post(dataControllers.saveATool)
    .get(dataControllers.getSchemaList)





module.exports = router;