var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	console.log("addFriend");

	var name = req.query.name;
	var description = req.query.description;

	var newFriend = {
		name: name,
		description: description,
		imageURL: "http://lorempixel.com/400/400/people"
	}

	data.friends.push(newFriend);

	res.redirect('/');
 }