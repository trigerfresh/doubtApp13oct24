const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res)=>{
	const url = "mongodb+srv://abnavesiddhesh157:iLsoq5Cg0l3MR60w@cluster0.b6zkc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("doubt13oct24");
	const coll = db.collection("student");
	const doc = {"name" : req.body.name, "doubt": req.body.doubt};
	coll.insertOne(doc)
	.then(res=>res.send(result))
	.catch(error=>res.send(error))
});

app.listen(9000, ()=>{console.log("Ready @ 9000")})