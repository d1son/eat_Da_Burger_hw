//set up the code to connect Node to MySQL
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  database : "burgers_db"
  port     : 3306
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;