"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('My name is aayush basnet');
});
app.listen(3000, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Done', 3000);
    }
});
