const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  database: "rezsi",
  user: "root",
  password: "",
});

connection.connect(function (err) {
  if (err) {
    console.log("Cannot connect to database!");
    return;
  }
});

module.exports = connection;
