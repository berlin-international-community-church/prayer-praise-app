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

    new AuthService(MessagesRepo, UsersRepo)
      .checkAuthorization(userId, request.params.id)
      .then(() => new MessagesService(MessagesRepo, UsersRepo).getMessageForUser(request.params.id))
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

  delete(request, response) {

    const userId = request.auth.credentials.id;

    new AuthService(MessagesRepo, UsersRepo)
      .checkAuthorization(userId, request.params.id)
      .then(() => new MessagesService(MessagesRepo, UsersRepo).deleteUserMessage(request.params.id))
      .then(() => new MessagesService(MessagesRepo, UsersRepo).getAllUserMessages(userId))
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err))); // TODO: send 4xx in case of bad auth
  }

  update(request, response) {

    const userId = request.auth.credentials.id;

    new AuthService(MessagesRepo, UsersRepo)
      .checkAuthorization(userId, request.params.id)
      .then(() => new MessagesService(MessagesRepo, UsersRepo).updateUserMessage(request.params.id, request.payload.message))
      .then(() => response({}))
      .catch((err) => response(Boom.badImplementation(err))); // TODO: send 4xx in case of bad auth
  }

  create(request, response) {

    new UsersService(UsersRepo)
      .findAuthorizedUser(request.headers.authorization)
      .then((user)    => new MessagesService(MessagesRepo, UsersRepo).createMessageForUser(user.id, request.payload.message))
      .then((message) => response(message))
      .catch((err)    => response(Boom.badImplementation(err)));
  }

}

module.exports = new MessagesController();
