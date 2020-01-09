//  Object-relational mapping
//  technique for converting data between incompatible type systems
//   using object-oriented programming languages.
var connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) { // creates an array of question marks
    arr.push("?");                // - ["?", "?", "?"]
  }
  return arr.toString();  // ["?", "?", "?"].toString() => "?,?,?";
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {  // loop through the keys and push the key/value as a string int arr
    
    var value = ob[key];
  
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


// Object for all our SQL statement functions.
var orm = {
  SelectAll: function (tableInput, cb) {
    // console.log('orm.select all'); // WORKING
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        console.log(err, "ERROR query");
        throw err;
      }
      console.log("ORM.select all", result) //array all data Table // WORKING
      cb(result);
    });
  },


  insertOne: function (tableInput, cols, vals, cb) {
    console.log('orm.insert One'); //working

    var queryString = "INSERT INTO " + tableInput;

    queryString += " (";
    queryString += cols.toString(); //
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length); //
    queryString += ") ";

    console.log("ORM CREATE:", queryString); //working
    //ORM CREATE,  INSERT INTO pastries (pastry_name,devoured) VALUES (?,?) 

    connection.query(queryString, vals, function (err, result) {

      if (err) {
        console.log(error);
        throw err;
      }

      cb(result);
    });
  },

  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log("ORM UPDATE:", queryString); //
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  deleteOne: function(table,condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    // console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (pastry.js).
module.exports = orm;