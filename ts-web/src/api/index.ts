import { AxiosInstance, default as axios } from 'axios';
import Config from '../config';

const AppAPI = {

  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: sessionStorage.getItem('token') || ''
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

  // async deleteBond (bondID) {
  //   return await API.init()({ method: 'delete', url: Config.env.api_url + '/bond_order', data: bondID });
  // },
  //
  // async updatePassword (password) {
  //   return await API.init().put(Config.env.auth_url + '/me', {
  //     password
  //   });
  // }

}

export default AppAPI;
