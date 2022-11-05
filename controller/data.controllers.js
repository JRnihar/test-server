const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/db.connected");

////cutomer card controller/////
//getData by email
module.exports.getSchemaList = async (req, res, next) => {
    try {
        const db = getDb();
        const email = req.params;
        const tool = await db
            .collection("test")
            .find( email )
            .toArray();

        res.status(200).json({ success: true, data: tool });
        res.send(data);
    } catch (error) {
        next(error);
    }
};
//getAllCusomter data
module.exports.getAllSchemaList = async (req, res, next) => {
    try {
        const db = getDb();
        const tool = await db
            .collection("test")
            .find( {} )
            .toArray();

        res.status(200).json({ success: true, data: tool });
        res.send(data);
    } catch (error) {
        next(error);
    }
};
//saveAllCutomerData
module.exports.saveATool = async (req, res, next) => {
    try {
        const db = getDb();
        const tool = req.body;

        const result = await db.collection("test").insertOne(tool);
        console.log(result);

        if (!result.insertedId) {
            return res.status(400).send({ status: false, error: "Something went wrong!" });
        }

        res.send({ success: true, message: `Tool added with id: ${result.insertedId}` });
    } catch (error) {
        next(error);
    }
};
//Delete Data
module.exports.deleteList = async (req, res, next) => {
    try {
        const db = getDb();
        const { id } = req.params;
        console.log(id);

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, error: "Not a valid data id." });
        }

        const list = await db.collection("test").deleteOne({ _id: ObjectId(id) });

        if (!list.deletedCount) {
            return res.status(400).json({ success: false, error: "Couldn't delete the data" });
        }

        res.status(200).json({ success: true, message: "Successfully deleted the data" });
    } catch (error) {
        next(error);
    }
};
//Get Data By ID
module.exports.getsingleListDetail = async (req, res, next) => {
    try {
        const db = getDb();
        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, error: "Not a valid tool id." });
        }

        const lists = await db.collection("test").findOne({ _id: ObjectId(id) });

        if (!lists) {
            return res.status(400).json({ success: false, error: "Couldn't find a tool with this id" });
        }

        res.status(200).json({ success: true, data: lists });

    } catch (error) {
        next(error);
    }
};
module.exports.updateData = async (req, res, next) => {
    try {
        const db = getDb();
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, error: "Not a valid data id." });
        }

        const data = await db.collection("test").updateOne({ _id: ObjectId(id) }, { $set: req.body });

        if (!data.modifiedCount) {
            return res.status(400).json({ success: false, error: "Couldn't data the tool" });
        }

        res.status(200).json({ success: true, message: "Successfully updated the data" });
    } catch (error) {
        next(error);
    }
};


/////////////////////////////All Defult data/////////////////////////////
//getDefultData
module.exports.getAllList = async (req, res, next) => {
    try {
        const db = getDb();
        const tool = await db
            .collection("list")
            .find({})
            .toArray();

        res.status(200).json({ success: true, data: tool });
        res.send(data);
    } catch (error) {
        next(error);
    }
};
//get A Defult data by ID
module.exports.getListDetail = async (req, res, next) => {
    try {
        const db = getDb();
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, error: "Not a valid tool id." });
        }

        const lists = await db.collection("list").findOne({ _id: ObjectId(id) });

        if (!lists) {
            return res.status(400).json({ success: false, error: "Couldn't find a tool with this id" });
        }

        res.status(200).json({ success: true, data: lists });

    } catch (error) {
        next(error);
    }
};

