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

router.post("/api/burger", function (req, res) {
    burger.insertOne("burger_name", [req.body.burger_name], function (result) {
        res.json(result)
    })
})







module.exports = router;