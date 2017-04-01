'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const Sequelize = require('sequelize');

server.connection({ port: 3000, host: 'localhost'})

server.register([
  {
      register: require('hapi-sequelizejs'),
      options: [
        {
          name: 'hapi', // identifier
          models: ['./models/*.js'],  // paths/globs to model files
          sequelize: new Sequelize('hapi', 'root', ''),
          sync: true, // sync models - default false
          forceSync: false, // force sync (drops tables) - default false
          onConnect: function (database) { // Optional
            // migrations, seeders, etc.
          }
        }
      ]
  }
],(err) => {

  const routes = require('./routes')(server)

  server.start( (err) => {
    if(err){
      throw err
    }
    console.log('server run !!');
  })
});
