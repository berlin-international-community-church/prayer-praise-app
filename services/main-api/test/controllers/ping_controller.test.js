'use strict';

const Server = require('../../');

describe('ping controller', () => {

  const options = {
    method: 'GET',
    url: '/'
  };

  beforeAll((done) => {
    Server.on('start', () => {
      done();
    });
  });

  afterAll((done) => {
    Server.on('stop', () => {
      done();
    });
    Server.stop();
  });

  test('responds with success for ping', (done) => {
    Server.inject(options, (response) => {

      expect(response.statusCode).toBe(200);
      expect(response.result).toBeInstanceOf(Object);
      done();
    });
  });

});
