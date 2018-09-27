const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SuperSecretPasswordHere',
    port: 3306,
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected to the DB')
});

module.exports = connection;