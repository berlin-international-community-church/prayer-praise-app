'use strict';

const messagesRepo = require('./../repositories/messages_repo');

const getAllMessagesForUser = (userId, getMessages = messagesRepo.getMessages) => {

  return getMessages(userId);
};

module.exports = {
  getAllMessagesForUser
}
