const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const sendmail = require('./routes/mail');
require('dotenv').config();
const mysql = require('mysql');

const app = express();

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

connection.connect((err) => {
    if (err) {
        throw err
    } else {
        console.log("connected");
    }
});

// connection.query('CREATE TABLE details(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) NOT NULL )', (err, rows) => {
//     if (err) {
//         throw err
//     } else {
//         console.log('data sent');
//         console.log(rows);
//     }
// });

// app.get("/", (req,res) => {
//     connection.query("INSERT INTO details(id, email) VALUES (1, 'dishu@gmail.com')", (err, rows) => {
//         if (err) {
//             throw err
//         } else {
//             console.log('data sent');
//             console.log(rows);
//         }
//     })
// });

app.get('/api/get', (req,res) => {
   
    const sqlSelect = `SELECT * FROM details`
    connection.query(sqlSelect, (err,result) => {
        // res.redirect("/api/get");
        res.send(result);
    })
})
app.get('/api/get/:id', (req,res) => {
   
    const sqlSelect = `SELECT * FROM details WHERE id = ${req.params.id}`
    connection.query(sqlSelect, (err,result) => {
        // res.redirect("/api/get");
        res.send(result);
    })
})

app.post('/api/insert', (req,res) => {
    const email = req.body.email;

    const sqlInsert = "INSERT INTO details (email) VALUES (?)"
    connection.query(sqlInsert, [email], (err,result) => {
        if (err) {
            console.log(result);     
        } else {
            if(result.affectedRows>0) {
                sendmail();
            }
            else { 
                res.send('Please try again!');
            }
        }
    })
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("server is running on port 8080");
});


//ALTER USER 'root'@'localhost' identifed WITH mysql_native_password BY 'password'
//CREATE DATABASE zocket_db
//USE zocket_db
