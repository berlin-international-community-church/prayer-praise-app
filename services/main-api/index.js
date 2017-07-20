'use strict';

const Hapi          = require('hapi');
const Config        = require('config');
const HapiAuthJWT   = require('hapi-auth-jwt2');
const GoodLogging   = require('good');
const Routes        = require('./lib/routes/');
const Token         = require('./lib/services/token');
const LoggingConfig = require('./lib/middlewares/logging_config');

// Create a server with a host and port
const server = new Hapi.Server();

// Logging setup
const goodOptions = { reporters: LoggingConfig, includes: { request: ['headers'] } };
const registered  = [HapiAuthJWT, { register: GoodLogging, options: goodOptions }];

// Server config
server.connection({
  port: Config.get('api.port'),
  routes: { cors: Config.get('api.cors') }
});

server.register(registered, (err) => {

  if (err) {
    console.error(err);
    throw err;
  }

  // Auth
  server.auth.strategy('jwt', 'jwt', {
    key: Config.get('token.secret'),
    validateFunc: Token.validate,
    verifyOptions: { algorithms: ['HS256'] }
  });

  server.auth.default('jwt');

  // Add the routes
  server.route(Routes.config);
});

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

module.exports = server;
