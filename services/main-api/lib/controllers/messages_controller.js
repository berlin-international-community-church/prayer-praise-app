const Boom   = require('boom');
const MessagesService = require('./../services/messages_service');
const UsersService = require('./../services/users_service');

class MessagesController {

  index(request, response) {

    let userId = null;
    const headers = request.headers;
    if (!headers.authorization) {
      userId = null;
    }

    MessagesService.instance().getAllSharedMessagesAvailable(userId)
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

  show(request, response) {

    const userId = request.auth.credentials.id;

    MessagesService.instance().getMessageForUser(userId, request.params.id)
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

  create(request, response) {

    UsersService.instance().findAuthorizedUser(request.headers.authorization)
      .then((user)    => MessagesService.instance().createMessageForUser(user.id, request.payload.message))
      .then((message) => response(message))
      .catch((err)    => response(Boom.badImplementation(err)));
  }

}

module.exports = new MessagesController();
