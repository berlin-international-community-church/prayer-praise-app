const Boom = require('boom');
const MessagesService = require('./../services/messages_service');

class MessagesController {

  index(request, response) {

    const userId = request.auth.credentials.id;

    MessagesService.instance().getAllMessagesForUser(userId)
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

  show(request, response) {

    const userId = request.auth.credentials.id;

    MessagesService.instance().getMessageForUser(userId, request.params.id)
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

}

module.exports = new MessagesController();
