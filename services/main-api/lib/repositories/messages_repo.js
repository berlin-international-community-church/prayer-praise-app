'use strict';

const DB = require('./db');

class MessagesRepo {

  getAllSharedMessages() {

    return DB('messages')
      .whereIn('sharedStatus', ['0', '2']);
  }

  getMessagesSharedToAll() {

    return DB('messages').where({ sharedStatus: '2' });
  }

  getAllUserMessages(userId) {

    return DB('messages').where({ user_id: userId });
  }

  getMessage(msgId) {

    return DB('messages').where({ id: msgId }).first();
  }

  updateMessage(msgId, message) {

    return DB('messages')
      .where({ id: msgId })
      .update({
        messageText: message.messageText,
        sharedStatus: message.sharedStatus
      });
  }

  deleteUserMessage(msgId) {

    return DB('messages').where({ id: msgId }).del();
  }

  createMessageForUser(userId, message) {

    return DB('messages').insert({
      user_id: userId,
      messageType: message.messageType,
      messageText: message.messageText,
      sharedStatus: message.sharedStatus
    });
  }

}

module.exports = new MessagesRepo();
