const Boom = require('boom');
const MessagesService = require('./../services/messages_service').instance();

class MessagesController {

  index(request, response) {

    const userId = request.auth.credentials.id;

    MessagesService.getAllMessagesForUser(userId)
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

  show(request, response) {

    const userId = request.auth.credentials.id;

    MessagesService.getMessageForUser(userId, request.params.id)
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

  create(request, response) {

    const userId = request.auth.credentials.id;

    MessagesService.createMessageForUser(userId, request.payload.message)
      .then((message) => response(message))
      .catch((err) => response(Boom.badImplementation(err)));
  }

}

module.exports = new MessagesController();
