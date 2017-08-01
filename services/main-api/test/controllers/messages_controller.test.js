'use strict';

const Promise = require('bluebird');

const Server          = require('../../');
const Token           = require('../../lib/services/token');
const MessagesService = require('../../lib/services/messages_service');
const AuthService     = require('../../lib/services/auth_service');
const DB              = require('../../lib/repositories/db');

describe('messages controller', () => {

  const userId  = 42;
  // const messageId = 101;
  const mockedMessages = jest.fn();
  const mockedUserRepo = {
    findUserBy: jest.fn().mockReturnValue(Promise.resolve({}))
  };
  const mockedMessagesRepo = {
    getAllUserMessages: mockedMessages,
    getMessage: jest.fn().mockReturnValue(Promise.resolve({}))
  };

  beforeAll((done) => {

    MessagesService.instance(mockedMessagesRepo, mockedUserRepo);
    AuthService.instance(mockedUserRepo, mockedMessagesRepo);
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

      const returnValue = [{ foo: 'bar' }];
      mockedMessages.mockReturnValue(Promise.resolve(returnValue));

      Server.inject(options, (response) => {

        expect(response.statusCode).toBe(200);
        expect(response.result).toEqual(returnValue);
        done();
      });
    });
  });

  // describe('get specific message', () => {

  //   const options = {
  //     method: 'GET',
  //     url: `/messages/${messageId}`,
  //     headers: { 'Authorization': Token.generate(userId) }
  //   };

  //   test('fetch a specific messages for a user', (done) => {

  //     const returnValue = { foo: 'bar' };
  //     // mock2.mockReturnValue(Promise.resolve(returnValue));

  //     Server.inject(options, (response) => {

  //       expect(response.statusCode).toBe(200);
  //       expect(response.result).toBe(returnValue);
  //       done();
  //     });
  //   });
  // });

});
