'use strict';

class Ping {

  show(request, response) {

    response({ pong: true });
  }

}

module.exports = new Ping();
