const Promise = require('bluebird');
const axios   = require('axios');

class Auth0Service {

  fetchOrCreateUser(accessToken) {
    console.log(accessToken);
    return axios({
      url: 'https://rockyj.eu.auth0.com/userinfo',
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
  }

}

let obj = null;

const instance = () => {
  if (!obj) {
    obj = new Auth0Service();
  }
  return obj;
}

module.exports = {
  instance
}
