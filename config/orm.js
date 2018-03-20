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
	updateOne: function ( burger_name, id) {
		
		connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [burger_name, id], function (err, result) {
			if (err) throw err;
			
			return result;
		});
	},
};

module.exports = orm;
