'use strict';
var episodeService = require('../services/episode');




exports.getAnimeReleaseFromToday = function (req, res){
    episodeService.getEpisodeFromToday(req, res);
};
