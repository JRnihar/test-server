const express = require("express");
const dataControllers = require("../../controller/data.controllers");
const router = express.Router();

router
    .route("/")
    // .get(dataControllers.getAllList)
    .get(dataControllers.getAllList)
    // .post(dataControllers.saveAData);


// router.route("/abc")
// .post(dataControllers.saveAData)
// .get(dataControllers.getAllList);
router
    .route("/:id")
    .get(dataControllers.getListDetail)
// router
//     .route("/login")
//     .post(dataControllers.getListDetail)



module.exports = router;