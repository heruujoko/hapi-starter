'use strict';

const Info = require('./handlers/Info')

module.exports = function(server){

  server.route([
    { method: "GET", path: "/", config: Info.serverInfo }
  ]);

}
