flair-ui
========

An express module that bundles the [swagger-ui](https://github.com/wordnik/swagger-ui) as a mountable thing. It can be used with any REST service that produces a [swagger](http://swagger.wordnik.com/) compliant JSON description.

Note that no changes have been made to the UI apart from templating the initial page to allow passing in of options from the express app.

Installation
------------
        npm install flair-ui
Usage
-----
        var flairui = require('flair-ui');
        //mounts the html docs and api explorer on /docs
        //(needs to know the location of swagger json - could be passed absolute or relative url)
        app.get("/docs", flairui("/api-doc"));
        app.use(express.static('node_modules/flair-ui/node_modules/swagger-ui/dist'));

Licence
-------
[Apache Licence 2.0](https://www.apache.org/licenses/LICENSE-2.0) - same as swagger-ui.
