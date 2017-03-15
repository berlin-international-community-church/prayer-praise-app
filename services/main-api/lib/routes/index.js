'use strict';

const PingController = require('../controllers/ping_controller');

const Routes = {
  config: [
    { method: 'GET', path: '/', config: { auth: false }, handler: PingController.show }
  ]
};

module.exports = Routes;
