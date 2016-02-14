var anilistService = require('./anilist');

function sortAnimeByDate(animes){
  return animes.sort(function(first, second) {
    first = new Date(first.airing.time);
    second = new Date(second.airing.time);
    return first < second ? -1 : first > second ? 1 : 0;
  });
};

exports.getEpisodeFromToday = function(req, res){
  var query = 'browse/anime?'
  query += 'sort=score-desc';
  query += '&status=Currently%20Airing&airing_data=true';
  query += '&full_page=true';
  anilistService.executeRequest(query)
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
