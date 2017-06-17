'use strict';

const DB = require('./db');

class MessagesRepo {

  getAllMessages(userId) {
    return DB('messages').where({ user_id: userId });
  }

  getMessageForUser(userId, msgId) {
    return DB('messages').where({ id: msgId, user_id: userId });
  }

}

module.exports = new MessagesRepo();
