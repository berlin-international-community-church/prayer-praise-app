'use strict';

const PingController     = require('../controllers/ping_controller');
const MessagesController = require('../controllers/messages_controller');

const Routes = {
  config: [
    { method: 'GET', path: '/',         config: { auth: false }, handler: PingController.show      },
    { method: 'GET', path: '/messages', config: { auth: 'jwt' }, handler: MessagesController.index }
  ]
};

module.exports = Routes;
