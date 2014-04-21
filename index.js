var express = require('express')
, defaults = {
  supportHeaderParams: false,
  apiKey: 'special-key' 
};

module.exports = function(swaggerUrl, options) {
  var app = express()
  , opts = merge(defaults, options);
  
  function render(req, res) {
    res.render('index.ejs', { discoveryUrl: swaggerUrl, options: opts });
  }

  app.set('views', __dirname);
  app.engine('ejs', require('ejs').__express);
  app.get('/index.html', render);
  app.use(express.static(__dirname + '/node_modules/swagger-ui/dist'));
  app.get('/', render);

  return app;
};

function copy(dest, src) {
  if (src) {
    Object.keys(src).forEach(function(property) {
      dest[property] = src[property];
    });
  }
}

function merge(a, b) {
  var c = {};  
  copy(c, a);
  copy(c, b);
  return c;
}
