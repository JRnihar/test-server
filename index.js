const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config()
const dataRoutes = require("./routes/v1/data.routes");
const listRouts = require("./routes/v1/list.Router");
const allListRouts = require("./routes/v1/allList.route");
const errorHandler = require("./middleware/errorHandler");
const { connectToServer } = require("./utils/db.connected");

// middleware
app.use(cors());
app.use(express.json());

//connect MongoDB
connectToServer((err) => {
    if (!err) {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } else {
        console.log(err);
    }
});

//Routes
app.use("/api/v1/list", dataRoutes);
app.use("/api/v1/test", listRouts);
app.use("/api/v1/allList", allListRouts);

app.get("/", (req, res) => {
    
    res.send("Hello World");
        
});

app.all("*", (req, res) => {
    res.send("NO route found.");
});

//Errorhandler
app.use(errorHandler);
