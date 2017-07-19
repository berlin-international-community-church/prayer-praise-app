const Boom   = require('boom');
const MessagesService = require('./../services/messages_service');

class SharedMessagesController {

  index(request, response) {

    MessagesService.instance().getMessagesSharedToAll()
      .then((messages) => response(messages))
      .catch((err) => response(Boom.badImplementation(err)));
  }

}

module.exports = new SharedMessagesController();
