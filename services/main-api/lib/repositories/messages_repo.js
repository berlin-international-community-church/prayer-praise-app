'use strict';

const DB = require('./db');

const SHARED_WITH_EVERYONE = 0;
// const SHARED_WITH_NOONE = 1;
const SHARED_WITH_PRAYER_TEAM = 2;

class MessagesRepo {

  getMessage(msgId) {

    return DB('messages').where({ id: msgId }).first();
  }

  getMessagesSharedToAll() {

    return DB('messages')
      .where({ sharedStatus: SHARED_WITH_EVERYONE })
      .orderBy('created_at', 'desc');
  }

  getAllSharedMessages() {

    return DB('messages')
      .whereIn('sharedStatus', [SHARED_WITH_EVERYONE, SHARED_WITH_PRAYER_TEAM]);
  }

  getAllUserMessages(userId) {

    return DB('messages').where({ user_id: userId });
  }

  createMessageForUser(userId, message) {

    return DB('messages').insert({
      user_id: userId,
      messageType: message.messageType,
      messageText: message.messageText,
      sharedStatus: message.sharedStatus
    });
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

}

module.exports = new MessagesRepo();
