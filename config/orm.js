var connection = require('./connection.js');

var orm = {
	selectAll: function(cb){

		connection.query('SELECT * FROM burgers;', function(err, result){
			if (err) throw err;
			// console.log(result);
			 cb(result);
		})
	},
	insertOne: function (burger_name, cb) {
		
		connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burger_name], function (err, result) {
			if (err) throw err;			
			 cb(result);
		});
	},
	updateOne: function ( devoured, id, cb) {
		
		connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [ devoured, id], function (err, result) {
			if (err) throw err;			
			cb(result);
			
		});
	},
};

module.exports = orm;
