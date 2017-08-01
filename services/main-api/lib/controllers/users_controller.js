'use strict';

const Boom = require('boom');
const UsersService = require('./../services/users_service').instance();

class UsersController {

  show(request, response) {

    const userId = request.auth.credentials.id;

    UsersService.findUser(userId)
      .then((user) => response(user))
      .catch((err) => response(Boom.badImplementation(err)));
  }

}

module.exports = new UsersController();
