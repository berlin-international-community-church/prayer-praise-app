class MessagesService {

  constructor(repo) {
    this.repo = repo
  }

  getAllSharedMessagesAvailable(userId) {
    if (!userId) {
      return this.repo.getMessagesSharedToAll();
    }
    return this.repo.getAllMessages(userId);
  }

  getAllMessagesForUser(userId) {
    return this.repo.getAllMessages(userId);
  }

  getMessageForUser(userId, msgId) {
    return this.repo.getMessageForUser(userId, msgId);
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
    return this.repo.createMessageForUser(userId, message);
  }

}

let obj = null;

const instance = (repo = require('./../repositories/messages_repo')) => {
  if (!obj) {
    obj = new MessagesService(repo);
  }
  return obj;
}

module.exports = {
  instance
}
