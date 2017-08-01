'use strict';

const Promise = require('bluebird');
const Sinon   = require('sinon');

const Server  = require('../../');
const Token   = require('../../lib/services/token');

const MessagesRepo = require('../../lib/repositories/messages_repo');
const UsersRepo    = require('../../lib/repositories/users_repo');
const DB           = require('../../lib/repositories/db');

describe('messages controller', () => {

  const userId = 42;
  const messageId = 101;
  const userMessages = [{ id: messageId, user_id: userId }];
  const sharedMessages = [{ id: 999 }];

  beforeAll((done) => {

    Sinon.stub(MessagesRepo, 'getAllUserMessages').callsFake(() => Promise.resolve(userMessages));
    Sinon.stub(MessagesRepo, 'getAllSharedMessages').callsFake(() => Promise.resolve(sharedMessages));
    Sinon.stub(MessagesRepo, 'getMessage').callsFake(() => Promise.resolve(userMessages[0]));
    Sinon.stub(MessagesRepo, 'getMessageForUser').callsFake(() => Promise.resolve(userMessages[0]));
    Sinon.stub(UsersRepo, 'findUserBy').callsFake(() => Promise.resolve({ id: userId }));
    Server.on('start', done);
  });

  afterAll((done) => {

    Server.on('stop', () => {

      DB.destroy()
        .then(() => done());
    });
    Server.stop();
  });

  describe('get all messages', () => {

    const options = {
      method: 'GET',
      url: '/messages',
      headers: { 'Authorization': Token.generate(userId) }
    };

    test('fetch all messages for a user', (done) => {

      Server.inject(options, (response) => {

        expect(response.statusCode).toBe(200);
        expect(response.result).toEqual(userMessages);
        done();
      });
    });
  });

  describe('get specific message', () => {

    const options = {
      method: 'GET',
      url: `/messages/${messageId}`,
      headers: { 'Authorization': Token.generate(userId) }
    };

    test('fetch a specific messages for a user', (done) => {

      Server.inject(options, (response) => {

        expect(response.statusCode).toBe(200);
        expect(response.result).toBe(userMessages[0]);
        done();
      });
    });
  });

});
