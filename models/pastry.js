const orm = require('../config/orm.js');

//Also inside burger.js,
// create the code that will call the ORM functions using burger specific input for the ORM.

var pastry = {
  
    all: function(cb) {
      orm.SelectAll("pastries", function(res) { //
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {

      orm.insertOne("pastries", cols, vals, function(res) {

        console.log(" pastry.js CREATE"); //working

        cb(res);
        console.log(res);

      });
    },

    update: function(objColVals, condition, cb) {
      orm.updateOne("pastries", objColVals, condition, function(res) {

        console.log(" pastry.js UPDATE"); //working

        cb(res);
      });
    },



    delete: function(condition, cb) {
      orm.deleteOne("pastries", condition, function(res) {
        cb(res);
      });
    }
  };
  

module.exports = pastry;