const Boom = require('boom');
const MessagesService = require('./../services/messages_service');

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

    const userId = request.auth.credentials.id;

    MessagesService.instance().createMessageForUser(userId, request.payload.message)
      .then((message) => response(message))
      .catch((err) => response(Boom.badImplementation(err)));
  }

}

module.exports = new MessagesController();
