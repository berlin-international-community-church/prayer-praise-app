'use strict';

const PingController     = require('../controllers/ping_controller');
const MessagesController = require('../controllers/messages_controller');
const TokenController    = require('../controllers/token_controller');

const Routes = {
  config: [
    { method: 'GET',  path: '/',              config: { auth: false }, handler: PingController.show      },
    { method: 'POST', path: '/token',         config: { auth: false }, handler: TokenController.create   },
    { method: 'GET',  path: '/messages',      config: { auth: 'jwt' }, handler: MessagesController.index },
    { method: 'GET',  path: '/messages/{id}', config: { auth: 'jwt' }, handler: MessagesController.show  }
  ]
};

module.exports = Routes;
