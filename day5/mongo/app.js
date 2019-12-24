const MongoClient = require('mongodb').MongoClient;

const mongourl = 'mongodb://127.0.0.1:27017/'
const collection_name = 'tempcoll';

const insertData = (db) => {
    db.collection(collection_name).insertMany([
        {
            'name':'student1',
            'age' : 25
        },
        {
            'name':'student2',
            'age' : 25
        },
        {
            'name':'student3',
            'age' : 25
        },
        {
            'name':'student4',
            'age' : 25
        },
        {
            'name':'student5',
            'age' : 25
        },
        {
            'name':'student6',
            'age' : 25
        }
    ])
}

MongoClient.connect(mongourl, { useNewUrlParser: true }, async (err,client) => {
    if(err) throw err;
    const db = client.db('temp');

    const collList = await db.listCollections().toArray()
    console.log(collList);

    // Insert data
    insertData(db)
    
    let cursor1 = db.collection(collection_name).find({})
    cursor1.forEach(doc => console.log(doc))

    
    let cursor2 = db.collection(collection_name).find({})
    const data = await cursor2.toArray()
    console.log("Data", data)
    
    client.close()

})