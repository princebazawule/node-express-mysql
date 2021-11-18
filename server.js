const express = require('express')
const cors = require("cors")
require('dotenv').config()

const connection = require('./app/models/db')

// create express app
const app = express()

const corsOptions = {
    origin: "http://localhost:8081"
}

// set port
const PORT = process.env.PORT || 3000

app.use(cors(corsOptions));

// parse requests content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse requests of content-type: application/json
app.use(express.json())

// routes
require("./app/routes/customer.routes.js")(app);

// initial route
app.get('/', (req, res) => {
    res.send('welcome to the princeB app')
})

// route to - initially create db
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE testdb'
    connection.query(sql, (err, result) => {
        if(err) {
            console.log("error: ", err)
            result(err, null)
            return
        }
        console.log(result)
        res.send('Database created...')
    })
})

// route to - initially create table
app.get('/createcustomerstable', (req, res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS `customers` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(255) NOT NULL, name varchar(255) NOT NULL, active BOOLEAN DEFAULT false) ENGINE=InnoDB DEFAULT CHARSET=utf8'
    connection.query(sql, (err, result) => {
        if(err) {
            console.log("error: ", err)
            result(err, null)
            return
        }
        console.log(result)
        res.send('Customers table created...')
    })
})

// listen for requests
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
