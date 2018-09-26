const connection = require("./connection");

// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

const orm = {
    selectAll: function (table, cb) {
        const queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function (err, data) {
            if (err) throw err
            cb(data)
        })
    },
    insertOne: function (table, col, val, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(val.length);
        queryString += ") ";

        connection.query(queryString, val, function (err, data) {
            if (err) throw err
            cb(data)
        });

    },
    // An example of objColVals would be {name: panther, sleepy: true}


};

module.exports = orm