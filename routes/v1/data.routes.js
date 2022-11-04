const express = require("express");
const dataControllers = require("../../controller/data.controllers");
const router = express.Router();

router
    .route("/")
    .get(dataControllers.getAllList)
router
    .route("/:id")
    .get(dataControllers.getListDetail)
    
module.exports = router;