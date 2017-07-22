'use strict';

const Boom = require('boom');
const AuthService = require('./../services/auth_service').instance();
const Token = require('./../services/token');

class TokenController {

  create(request, response) {

    AuthService.fetchOrCreateUser(request.payload.accessToken)
      .then((user) => response({ token: Token.generate(user.id) }))
      .catch((err) => response(Boom.badImplementation(err)));
  }

}

module.exports = new TokenController();
