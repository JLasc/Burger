const mysql = require('mysql');
var connection;

/* if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'SuperSecretPasswordHere',
        port: 3306,
        database: 'burgers_db'
    });
} */

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    console.log("there was an error")
}


connection.connect()

module.exports = connection;