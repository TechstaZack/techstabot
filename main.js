require('dotenv')
const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const app = express();
const port = 4000;

const url = process.env.MONGODBURL;
const dbName = 'your-database-name';

app.get('/get-data', (req, res) => {
    MongoClient.connect(url, (err, client) => {
        if (err) throw err;

        const db = client.db(dbName);
        const collection = db.collection('your-collection-name');

        collection.find({}).toArray((err, data) => {
            if (err) throw err;
            res.json(data);
            client.close();
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
