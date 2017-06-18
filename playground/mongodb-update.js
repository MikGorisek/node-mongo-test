
// const MongoClient = require("mongodb").MongoClient;
const {MongoClient} = require("mongodb");


MongoClient.connect('mongodb://localhost:27017/zapiski', (err, db) => {
	if(err){
		return console.log("Neuspesno povezava na MongoDB server.");
	}

	console.log("Povezan na MongoDB.");


	// update lines
	// db.collection("Users").findOneAndUpdate({
	// 	name: "Mik"
	// },{
	// 	//update operator
	// 	$set: {
	// 		is_male: true
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	// delete one line
	db.collection("Users").findOneAndUpdate(
	{
		name: "Holly"
	},{
		//update operator
		$inc: {
			age: 1
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});



	// db.close();
});