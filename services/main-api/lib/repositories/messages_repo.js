'use strict';

const DB = require('./db');

class MessagesRepo {

  getMessages(userId) {
    return DB('messages').where({user_id: userId});
  }

}

module.exports = new MessagesRepo();
