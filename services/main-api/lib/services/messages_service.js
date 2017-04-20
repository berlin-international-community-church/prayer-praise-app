'use strict';

const getAllMessagesForUser = (userId, getMessages = require('./../repositories/messages_repo').getMessages) => {

  return getMessages(userId);
};

const getMessageForUser = (userId, msgId, getMessageForUser = require('./../repositories/messages_repo').getMessageForUser) => {

  return getMessageForUser(userId, msgId);
};

module.exports = {
  getAllMessagesForUser
}
