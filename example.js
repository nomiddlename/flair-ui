var express = require('express');
var app = express();
var flairui = require('./index');

app.use("/docs", flairui("http://localhost:30221/api-docs"));
app.use(express.static('node_modules/flair-ui/node_modules/swagger-ui/dist'));

app.listen(8000);


