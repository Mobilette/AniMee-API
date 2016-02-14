'use strict';

var id = "romsi94-8mpj9";
var key = "Inrp7MrZUx9yTeGgpsA";
var nani = require('nani').init(id, key);

exports.executeRequest = function(query){
  if(query !== null)
    return nani.get(query);
};
