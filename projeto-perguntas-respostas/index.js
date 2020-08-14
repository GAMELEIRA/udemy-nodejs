const express = require("express");

const app = express();

app.set("view angine", "ejs");

app.get('/', (req, res) => {

    res.render('index.ejs');

});

app.listen(8181);