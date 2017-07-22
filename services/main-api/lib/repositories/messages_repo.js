'use strict';

const DB = require('./db');

class MessagesRepo {

  getAllMessages() {

    return DB('messages')
      .whereIn('sharedStatus', ['SHARED_WITH_EVERYONE', 'SHARE_WITH_PRAYER_TEAM']);
  }

  getMessagesSharedToAll() {

    return DB('messages').where({ sharedStatus: 'SHARED_WITH_EVERYONE' });
  }

  getAllUserMessages(userId) {

    return DB('messages').where({ user_id: userId });
  }

  getMessageForUser(userId, msgId) {

    return DB('messages').where({ id: msgId, user_id: userId });
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
