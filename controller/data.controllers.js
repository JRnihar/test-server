const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/db.connected");

//getAllData
// module.exports.getAllList = async (req, res, next) => {
//     try {
//         const db = getDb();
//         const tool = await db
//             .collection("test")
//             .find({})
//             .toArray();

//         res.status(200).json({ success: true, data: tool });
//         res.send(data);
//     } catch (error) {
//         next(error);
//     }
// };
//getAllData

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
//get A Single data
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