
const { getDb } = require("../utils/db.connected");

//getAllData
module.exports.getAllData = async (req, res, next) => {
    try {
        const db = getDb();
        const tool = await db
            .collection("test")
            .find({})
            .toArray();

        res.status(200).json({ success: true, data: tool });
        res.send(data);
    } catch (error) {
        next(error);
    }
};

//SaveData
module.exports.saveAData = async (req, res, next) => {
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