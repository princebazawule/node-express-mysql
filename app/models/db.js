const mysql = require("mysql")
const dbConfig = require("../config/db.config.js")

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.DB_HOST,
    user: dbConfig.DB_USER,
    password: dbConfig.DB_PASSWORD,
    database: dbConfig.DB
  })
  
  // open the MySQL connection
  connection.connect(err => {
    if (err) throw err;
    console.log("Successfully connected to database with id: " + connection.threadId)
  })
  
  module.exports = connection