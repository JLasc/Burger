const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('views/images'));
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const exphbs = require('express-handlebars');


const port = process.env.port || 8080;


app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require('./controller/burgers_controller');

app.use(routes);


app.listen(port, function (err) {
    if (err) throw err
    console.log(`You are now connected to your server on port ${port}`)
})