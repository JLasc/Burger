const express = require('express');
const router = express.Router();

const burger = require('../model/burger');


router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        let burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render('index', burgerObj)
    })
});

router.get("/api/burger", function (req, res) {
    burger.selectAll(data => {
        res.json(data)
    })
})

router.post("/api/burger", function (req, res) {
    burger.insertOne("burger_name", [req.body.burger_name], function (result) {
        res.json(result)
    })
})


router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.eat
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.exports = router;