'use strict';

module.exports.serverInfo = {
  handler: function(request,reply){

    let DB = request.getDb('hapi');

    DB.getModel('users').findAll().then((users) => {
      console.log(users);
      reply(users);
    });
  }
}
