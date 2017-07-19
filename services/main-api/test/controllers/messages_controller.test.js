'use strict';

const Server          = require('../../');
const Token           = require('../../lib/services/token');
const MessagesService = require('../../lib/services/messages_service');
const DB              = require('../../lib/repositories/db');

describe('messages controller', () => {

  const userId  = 42;
  const messageId = 101;
  const mock1 = jest.fn();
  const mock2 = jest.fn();
  MessagesService.instance(
    { getAllUserMessages: mock1, getMessageForUser: mock2 },
    { findAll: jest.fn() }
  );

  beforeAll((done) => {
    Server.on('start', () => {
      done();
    });
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
      mock1.mockReturnValue(Promise.resolve(returnValue));

      Server.inject(options, (response) => {

        expect(response.statusCode).toBe(200);
        expect(response.result).toBe(returnValue);
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
      const returnValue = { foo: 'bar' };
      mock2.mockReturnValue(Promise.resolve(returnValue));

      Server.inject(options, (response) => {

        expect(response.statusCode).toBe(200);
        expect(response.result).toBe(returnValue);
        done();
      });
    });

  });

});
