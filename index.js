const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config()

// middleware
app.use(cors());
app.use(express.json());

//connect MongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m6vprjp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        //data-collection
        const dataCollection = client.db('nihar').collection('test');

        //get data
        app.get('/abc', async (req, res) => {
            const query = {};
            const cursor = dataCollection.find(query);
            const data = await cursor.toArray({});
            res.send(data);
        })

        //post data
        app.post('/abc', async (req, res) => {
            const newData = req.body;
            console.log('adding new data', newData);
            const result = await dataCollection.insertOne(newData);
            res.send(result)
        });
    }
    finally {

    }
}

run().catch(console.dir);


//test-node_server
app.get('/', (req, res) => {
    res.send('Running my node  server')
})

app.listen(port, () => {
    console.log(' server is running ');
})