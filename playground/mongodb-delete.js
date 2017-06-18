
// const MongoClient = require("mongodb").MongoClient;
const {MongoClient} = require("mongodb");


MongoClient.connect('mongodb://localhost:27017/zapiski', (err, db) => {
	if(err){
		return console.log("Neuspesno povezava na MongoDB server.");
	}

	console.log("Povezan na MongoDB.");


	//delete many lines
	// db.collection("Users").deleteMany({
	// 	name: "Mik"
	// }).then((result) => {
	// 	console.log(result);
	// });

	// delete one line
	db.collection("Users").deleteOne({
		location: "Slovenia"
	}).then((result) => {
		console.log(result);
	});

	//find one and delete
	db.collection("Users").findOneAndDelete({
		is_male: false
	}).then((result) => {
		console.log(result);
	});



	// db.close();
});