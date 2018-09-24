const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SuperSecretPasswordHere',
    port: 3306,
    database: ''
});

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected to the Db')
});

module.exports = connection;