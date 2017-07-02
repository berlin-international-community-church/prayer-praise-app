class MessagesService {

  constructor(repo) {
    this.repo = repo
  }

  getAllMessagesForUser(userId) {
    return this.repo.getAllMessages(userId);
  }

  getMessageForUser(userId, msgId) {
    return this.repo.getMessageForUser(userId, msgId);
  }

  createMessageForUser(userId, message) {
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
