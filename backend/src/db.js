const mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "restaurant_manager"
});
db.connect(function(err) {
    if (err) throw err;
})

module.exports = db;