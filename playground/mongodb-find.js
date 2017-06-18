
// const MongoClient = require("mongodb").MongoClient;
const {MongoClient} = require("mongodb");


MongoClient.connect('mongodb://localhost:27017/zapiski', (err, db) => {
	if(err){
		return console.log("Neuspesno povezava na MongoDB server.");
	}

	console.log("Povezan na MongoDB.");

	//then, če je vse ok spusti zadevo naprej, drugače vrze error
	//docs predstavlja vrstice
	//v find pišeš query find(), find({neke: true})
	db.collection("Users").find({
		name: "Mik"
	}).toArray().then((docs) => {
		console.log("Users");
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err, result) => {
		if(err){
			return console.log("Unable to insert users!", err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	// db.close();
});