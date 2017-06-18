
const mongo_client = require("mongodb").MongoClient;


mongo_client.connect('mongodb://localhost:27017/zapiski', (err, db) => {
	if(err){
		return console.log("Neuspesno povezava na MongoDB server.");
	}

	console.log("Povezan na MongoDB.");

	// db.collection("Todos").insertOne({
	// 	text: "Someting to do",
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log("Unable to insert todo! ", err);
	// 	}
	// 	//ops stores all or something..
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection("Users").insertOne({
		name: "Mik",
		age: "27",
		location: "Slovenia"
	}, (err, result) => {
		if(err){
			return console.log("Unable to insert users!", err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	db.close();
});