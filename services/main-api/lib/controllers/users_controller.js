const Boom = require('boom');
const UsersService = require('./../services/users_service');

class UsersController {

  show(request, response) {

    const userId = request.auth.credentials.id;

    UsersService.instance().findUser(userId)
      .then((user) => response(user))
      .catch((err) => response(Boom.badImplementation(err)));
  }

}

module.exports = new UsersController();
