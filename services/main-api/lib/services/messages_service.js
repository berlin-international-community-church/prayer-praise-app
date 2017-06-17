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
