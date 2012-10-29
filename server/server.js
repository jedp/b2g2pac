#!/usr/bin/env node
/* -*- mode: js2 -*- */

const
logger = new (require('../lib/logger')),
express = require('express');

var app = module.exports = express.createServer();

app.configure(function(){
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  res.render('index');
});

// Maybe run
//
if (!module.parent) {
  app.listen(process.env.PORT || 3000);
  logger.info("Awsmang listening on port " + app.address().port);
}

