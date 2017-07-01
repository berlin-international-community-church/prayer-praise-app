const Boom = require('boom');
const Auth0Service = require('./../services/auth0_service');
const Token = require('./../services/token');

class TokenController {

  create(request, response) {

    Auth0Service.instance().fetchOrCreateUser(request.payload.accessToken)
      .then((user) => response({ token: Token.generate(user.id) }))
      .catch((err) => response(Boom.badImplementation(err)));
  }

}

module.exports = new TokenController();
