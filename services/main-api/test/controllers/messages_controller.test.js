'use strict';

const Server          = require('../../');
const Token           = require('../../lib/services/token');
const MessagesService = require('../../lib/services/messages_service');
const DB              = require('../../lib/repositories/db');

describe('messages controller', () => {

  const userId  = 42;
  const options = {
    method: 'GET',
    url: '/messages',
    headers: { 'Authorization': Token.generate(userId) }
  };

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

  test('responds with success for ping', (done) => {
    const returnValue = [{ foo: 'bar' }];

    const mockMessages = jest.fn();
    mockMessages.mockReturnValue(Promise.resolve(returnValue));
    MessagesService.getAllMessagesForUser = mockMessages;

    Server.inject(options, (response) => {

      expect(response.statusCode).toBe(200);
      expect(response.result).toBe(returnValue);
      done();
    });
  });

});
