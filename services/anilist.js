'use strict';

var id = "romsi94-8mpj9";
var key = "Inrp7MrZUx9yTeGgpsA";
var nani = require('nani').init(id, key);

exports.executeRequest = function(){
  var queryAnilist = 'browse/anime?'
  queryAnilist += 'sort=score-desc';
  queryAnilist += '&status=Currently%20Airing&airing_data=true';
  queryAnilist += '&full_page=true';
  return nani.get(queryAnilist);
};
