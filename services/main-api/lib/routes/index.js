'use strict';

const PingController     = require('../controllers/ping_controller');
const MessagesController = require('../controllers/messages_controller');
const SharedMessagesController = require('../controllers/shared_messages_controller');
const TokenController    = require('../controllers/token_controller');
const UsersController    = require('../controllers/users_controller');

const Routes = {
  config: [
    { method: 'GET',   path: '/ping',          config: { auth: false }, handler: PingController.show       },
    { method: 'POST',  path: '/token',         config: { auth: false }, handler: TokenController.create    },
    { method: 'GET',   path: '/me',            config: { auth: 'jwt' }, handler: UsersController.show      },
    { method: 'GET',   path: '/messages',      config: { auth: 'jwt' }, handler: MessagesController.index  },
    { method: 'GET',   path: '/messages/{id}', config: { auth: 'jwt' }, handler: MessagesController.show   },
    { method: 'DELETE',path: '/messages/{id}', config: { auth: 'jwt' }, handler: MessagesController.delete },
    { method: 'POST',  path: '/messages',      config: { auth: false }, handler: MessagesController.create },
    { method: 'GET',   path: '/sharedmessages',config: { auth: false }, handler: SharedMessagesController.index  }
  ]
};

module.exports = Routes;
