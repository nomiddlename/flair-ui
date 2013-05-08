var express = require('express');
var app = express();
var flairui = require('./index');

app.use("/docs", flairui("http://localhost:30221/api-docs"));
app.listen(8000);


