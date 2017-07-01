const Promise = require('bluebird');
const axios   = require('axios');
const Config  = require('config');

class Auth0Service {

  constructor(repo) {
    this.repo = repo
  }

  fetchOrCreateUser(accessToken) {
    // console.log(accessToken);
    return Promise.resolve(
      axios({
      url: Config.get('auth0_url'),
      headers: { 'Authorization': `Bearer ${accessToken}` }
    }))
    // .tap(console.log)
    .then((userDetails) => {
      return Promise.all([
        this.repo.findUserBy({ name: userDetails.data.name }),
        Promise.resolve(userDetails.data)
      ]);
    })
    .spread((user, userDetails) => {
      if (user && user.id) {
        return Promise.resolve(user);
      }
      return this.repo.createUser(userDetails.name, userDetails.picture);
    })
  }

}

let obj = null;

const instance = (repo = require('./../repositories/users_repo')) => {
  if (!obj) {
    obj = new Auth0Service(repo);
  }
  return obj;
}

module.exports = {
  instance
}
