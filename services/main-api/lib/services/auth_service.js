'use strict';

const Promise = require('bluebird');
const Axios   = require('axios');
const Config  = require('config');

class AuthService {

  constructor(userRepo, msgRepo) {

    this.userRepo = userRepo;
    this.msgRepo  = msgRepo;
  }

  fetchOrCreateUser(accessToken) {

    return Promise.resolve(
      Axios({
        url: Config.get('auth0_url'),
        headers: { 'Authorization': `Bearer ${accessToken}` }
      }))
      // .tap(console.log)
      .then((userDetails) => {

        return Promise.all([
          this.userRepo.findUserBy({ name: userDetails.data.name }),
          Promise.resolve(userDetails.data)
        ]);
      })
      .spread((user, userDetails) => {

        if (user && user.id) {
          return Promise.resolve(user);
        }
        return this.userRepo.createUser(userDetails.name, userDetails.picture);
      });
  }

  checkAuthorization(userId, msgId) {

    return Promise.all(
      [
        this.userRepo.findUserBy({ id: userId }),
        this.msgRepo.getMessage(msgId)
      ]
    )
      .spread((user, message) => {

        if (user.role === 'PRAYER_TEAM' || message.user_id === user.id) {
          return true;
        }
        throw new Error('User not authorized for message!');
      });
  }

}

let obj = null;

const instance = (userRepo = require('./../repositories/users_repo'),
  msgRepo = require('./../repositories/messages_repo')) => {

  if (!obj) {
    obj = new AuthService(userRepo, msgRepo);
  }
  return obj;
};

module.exports = {
  instance
};
