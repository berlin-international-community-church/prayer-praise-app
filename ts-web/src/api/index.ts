import axios from 'axios';

import Config from '../config';

const AppAPI = {

  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: sessionStorage.getItem('jwtToken') || ''
        }
      }
    });
  },

  async createToken(accessToken: string) {
    return await AppAPI.init()
      .post(Config.env.baseURL + '/token', { accessToken });
  },

  async fetchUserProfile() {
    return await AppAPI.init()
      .get(Config.env.baseURL + '/me');
  },

  async submitMessage(message) {
    return await AppAPI.init()
      .post(Config.env.baseURL + '/messages', { message });
  },

  async fetchSharedMessages() {
    return await AppAPI.init()
      .get(Config.env.baseURL + '/sharedmessages');
  },

  async fetchMyMessages() {
    return await AppAPI.init()
      .get(Config.env.baseURL + '/messages');
  },

  async deleteMessage(id) {
    return await AppAPI.init()
      .delete(Config.env.baseURL + `/messages/${id}`);
  }

};

export default AppAPI;
