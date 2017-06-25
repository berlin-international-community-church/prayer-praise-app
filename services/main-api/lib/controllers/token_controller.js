const Boom = require('boom');
const Auth0Service = require('./../services/auth0_service');

class TokenController {

  create(request, response) {

    Auth0Service.instance().fetchOrCreateUser(request.payload.accessToken)
      .then((result) => response(result))
      .catch((err) => response(Boom.badImplementation(err)));
  }

}

module.exports = new TokenController();
