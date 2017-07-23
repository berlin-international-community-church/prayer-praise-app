'use strict';

const Boom   = require('boom');
const MessagesService = require('./../services/messages_service');
const UsersService = require('./../services/users_service');
const AuthService = require('./../services/auth_service');

class MessagesController {

  index(request, response) {

    const userId = request.auth.credentials.id;

    MessagesService.instance().getAllUserMessages(userId)
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

  show(request, response) {

    const userId = request.auth.credentials.id;

    AuthService.instance().checkAuthorization(userId, request.params.id)
      .then(() => MessagesService.instance().getMessageForUser(request.params.id))
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

  delete(request, response) {

    const userId = request.auth.credentials.id;

    AuthService.instance().checkAuthorization(userId, request.params.id)
      .then(() => MessagesService.instance().deleteUserMessage(request.params.id))
      .then(() => MessagesService.instance().getAllUserMessages(userId))
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err))); // TODO: send 4xx in case of bad auth
  }

  create(request, response) {

    UsersService.instance().findAuthorizedUser(request.headers.authorization)
      .then((user)    => MessagesService.instance().createMessageForUser(user.id, request.payload.message))
      .then((message) => response(message))
      .catch((err)    => response(Boom.badImplementation(err)));
  }

}

module.exports = new MessagesController();
