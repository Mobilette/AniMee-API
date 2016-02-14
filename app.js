'uses strict';
var express = require('express');
var animeController = require('./controllers/anime');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*
 * Routes
 */
// Index Page
app.get('/', function(req, res, next) {
    res.json({message: 'connection api Animee ok' });
});

app.get("/api/anime/from/today", animeController.getAnimeReleaseFromToday);
app.listen(port);
console.log('Express started on port ' + port);
