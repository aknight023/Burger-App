var orm = require('../config/orm.js');

var burger = {

  		selectAll: function(cb){
    	orm.selectAll(function(res){

    		cb(res);
    	});     
  	},

  		insertOne: function(burger_name, cb){
   		orm.insertOne(burger_name, function(res) {
   			
   			cb(res);
   			
   		});     

  	},
  		updateOne: function( burger_id, cb){
  		orm.updateOne(true, burger_id, function(res) {
  			
  			cb(res)

  		});
	}, restoreOne: function(burger_id, cb) {
  		orm.updateOne(false, burger_id, function(res) {
  			
  			cb(res)

  		});

	}
};

module.exports = burger;