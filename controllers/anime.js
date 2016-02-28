'use strict';
var episodeService = require('../services/episode');

exports.getAnimeReleaseFromToday = function (req, res){
    episodeService.getEpisodeFromToday(req, res);
};
exports.getAnimeReleaseBySpecificDate = function(req, res){
    episodeService.getEpisodeByDate(req, res);
};
