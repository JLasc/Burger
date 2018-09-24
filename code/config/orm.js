require("./connection");

const orm = {
    all: function (table, cb) {
        const queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function (req, data) {
            cb(data)
        })
    },
    create: function () {

    },
    update: function () {

    },
    delete: function () {

    }
};

module.exports = orm