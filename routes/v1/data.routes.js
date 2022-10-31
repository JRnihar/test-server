const express = require("express");
const dataControllers = require("../../controller/data.controllers");
const router = express.Router();

router
    .route("/")
    .get(dataControllers.getAllData)
    .post(dataControllers.saveAData);


router.route("/abc").post(dataControllers.saveAData).get(dataControllers.getAllData);



module.exports = router;