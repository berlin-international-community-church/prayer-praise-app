'use strict';

const JWT    = require('jsonwebtoken');
const Config = require('config');

const Token = {

  validate: (decoded, request, callback) => {

    if (!decoded.id) {
      callback(null, false);
    }
    else {
      callback(null, true);
    }
  },

  generate: (userId) => {

    return JWT.sign({ id: userId }, Config.get('token.secret'), { expiresIn: '1h' });
  }

};

module.exports = Token;
