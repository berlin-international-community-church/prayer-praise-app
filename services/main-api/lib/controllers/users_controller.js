'use strict';

const Boom = require('boom');

const UsersService = require('./../services/users_service');
const UsersRepo    = require('./../repositories/users_repo');

class UsersController {

  show(request, response) {

    const userId = request.auth.credentials.id;

    new UsersService(UsersRepo)
      .findUser(userId)
      .then((user) => response(user))
      .catch((err) => response(Boom.badImplementation(err)));
  }

}

module.exports = new UsersController();
