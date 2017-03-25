'use strict';

const MessagesService = require('./../services/messages_service');

class MessagesController {

  index(request, response) {

    const userId = request.auth.credentials.id;
    response(MessagesService.getAllMessagesForUser(userId));
  }

}

module.exports = new MessagesController();
