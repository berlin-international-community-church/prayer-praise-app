const Promise = require('bluebird');

class UsersService {

  constructor(repo) {
    this.repo = repo
  }

  findUser(userId) {
    return this.repo.findUserBy({ id: userId });
  }

}

let obj = null;

const instance = (repo = require('./../repositories/users_repo')) => {
  if (!obj) {
    obj = new UsersService(repo);
  }
  return obj;
}

module.exports = {
  instance
}
