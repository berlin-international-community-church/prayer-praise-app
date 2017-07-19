const Promise = require('bluebird');

class MessagesService {

  constructor(messagesRepo, usersRepo) {
    this.messagesRepo = messagesRepo;
    this.usersRepo = usersRepo;
  }

  getMessagesSharedToAll(userId) {
    // We do this to avoid the N+1 query problem
    const enrichUser = (message, users) => {
      const user = users.find(user => user.id === message.user_id);
      message.shortUsername = user.name.substr(0, 2);
      return message;
    };

    return this.messagesRepo.getMessagesSharedToAll()
      .then((messages) => Promise.all([messages, messages.map(m => m.user_id)]))
      .spread((messages, userIds) => Promise.all([messages, this.usersRepo.findAll(userIds)]))
      .spread((messages, users) => messages.map((m) => enrichUser(m, users)));
  }

  getAllUserMessages(userId) {
    return this.messagesRepo.getAllUserMessages(userId);
  }

  getMessageForUser(userId, msgId) {
    return this.messagesRepo.getMessageForUser(userId, msgId);
  }

  createMessageForUser(userId, message) {
    const messageTypeMapping = {
      0: 'PRAYER',
      1: 'PRAISE'
    }
    const sharedStatusMapping = {
      0: 'SHARED_WITH_EVERYONE',
      1: 'SHARE_WITH_NOONE',
      2: 'SHARE_WITH_PRAYER_TEAM'
    }
    message.messageType = messageTypeMapping[message.messageType];
    message.sharedStatus = sharedStatusMapping[message.sharedStatus];
    return this.messagesRepo.createMessageForUser(userId, message);
  }

}

let obj = null;

const instance = (
  messagesRepo = require('./../repositories/messages_repo'),
  usersRepo = require('./../repositories/users_repo')) => {
  if (!obj) {
    obj = new MessagesService(messagesRepo, usersRepo);
  }
  return obj;
}

module.exports = {
  instance
}
