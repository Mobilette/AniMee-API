var anilistService = require('./anilist');

function sortAnimeByDate(animes){
  return animes.sort(function(first, second) {
    first = new Date(first.airing.time);
    second = new Date(second.airing.time);
    return first < second ? -1 : first > second ? 1 : 0;
  });
};



exports.getEpisodeFromToday = function(req, res){
  anilistService.executeRequest()
                .then(data => {
                  var result = data.filter(function(anime){
                    if(anime.airing !== null)
                      return anime;
                    });
                  result = sortAnimeByDate(result);
                  res.json(result);
                }).catch(error => {
                  res.json({message : error, type : 'error'})
                });
};

exports.getEpisodeByDate = function (req, res){
      var dateSearch = new Date(req.body.dateSearch);
      if(dateSearch == null)
        res.json({message : "dateSearch missing in your request!", type : 'error'});
      if(typeof(dateSearch) != "object")
        res.json({message : "dateSearch must be a date", type : 'error'});
      anilistService.executeRequest()
                    .then(data => {
                      var result = data.filter(function(anime){
                        if(anime.airing !== null)
                          if(new Date(anime.airing.time).toDateString() === dateSearch.toDateString())
                            return anime;
                        });
                      result = sortAnimeByDate(result);
                      res.json(result);
                    }).catch(error => {
                      res.json({message : error, type : 'error'})
                    });
  };
