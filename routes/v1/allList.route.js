const express = require("express");
const dataControllers = require("../../controller/data.controllers");
const router = express.Router();

router
    .route("/")
    .get(dataControllers.getAllSchemaList)
router
    .route("/:id")
    .get(dataControllers.getsingleListDetail)
    .delete(dataControllers.deleteList)
    .patch(dataControllers.updateData)


module.exports = router;