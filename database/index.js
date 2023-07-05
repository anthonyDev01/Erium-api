const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "123456",
  database: "erium",
  port: 3306,
});

module.exports = db;