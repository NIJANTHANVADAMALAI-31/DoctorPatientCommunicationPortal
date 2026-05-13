const mysql = require("mysql2");

const connection = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "1234",

    database: "doctor_portal"

});

connection.connect((err) => {

    if (err) {

        console.log("Database Error");

    } else {

        console.log("MySQL Connected");

    }

});

module.exports = connection;