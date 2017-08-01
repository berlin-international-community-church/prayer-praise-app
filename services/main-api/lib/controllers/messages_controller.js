'use strict';

const Boom   = require('boom');

const MessagesRepo    = require('./../repositories/messages_repo');
const UsersRepo       = require('./../repositories/users_repo');
const MessagesService = require('./../services/messages_service');
const UsersService    = require('./../services/users_service');
const AuthService     = require('./../services/auth_service');

class MessagesController {

  index(request, response) {

    const userId = request.auth.credentials.id;

    new MessagesService(MessagesRepo, UsersRepo)
      .getAllUserMessages(userId)
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

  show(request, response) {

    const userId = request.auth.credentials.id;
    const messagesService = new MessagesService(MessagesRepo, UsersRepo);
    const authService = new AuthService(MessagesRepo, UsersRepo);

    authService
      .checkAuthorization(userId, request.params.id)
      .then(() => messagesService.getMessageForUser(request.params.id))
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

  delete(request, response) {

    const userId = request.auth.credentials.id;
    const messagesService = new MessagesService(MessagesRepo, UsersRepo);
    const authService = new AuthService(MessagesRepo, UsersRepo);

    authService
      .checkAuthorization(userId, request.params.id)
      .then(() => messagesService.deleteUserMessage(request.params.id))
      .then(() => messagesService.getAllUserMessages(userId))
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err))); // TODO: send 4xx in case of bad auth
  }

  update(request, response) {

    const userId = request.auth.credentials.id;
    const messagesService = new MessagesService(MessagesRepo, UsersRepo);
    const authService = new AuthService(MessagesRepo, UsersRepo);

    authService
      .checkAuthorization(userId, request.params.id)
      .then(() => messagesService.updateUserMessage(request.params.id, request.payload.message))
      .then(() => response({}))
      .catch((err) => response(Boom.badImplementation(err))); // TODO: send 4xx in case of bad auth
  }

  create(request, response) {

    const messagesService = new MessagesService(MessagesRepo, UsersRepo);

    new UsersService(UsersRepo)
      .findAuthorizedUser(request.headers.authorization)
      .then((user)    => messagesService.createMessageForUser(user.id, request.payload.message))
      .then((message) => response(message))
      .catch((err)    => response(Boom.badImplementation(err)));
  }

}

module.exports = new MessagesController();
