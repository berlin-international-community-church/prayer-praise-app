import { AxiosInstance, default as axios } from 'axios';
import Config from '../config';

class AppAPI {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      headers: {
        common: {
          Authorization: sessionStorage.getItem('token') || ''
        }
      }
    });
  }

  async createToken(accessToken: string) {
    return await this.api.post(Config.env.baseURL + '/token', { accessToken });
  }

  async fetchUserProfile() {
    return await this.api.get(Config.env.baseURL + '/me');
  }

  async submitMessage(message) {
    return await this.api.post(Config.env.baseURL + '/messages', { message });
  }

  // async deleteBond (bondID) {
  //   return await API.API()({ method: 'delete', url: Config.env.api_url + '/bond_order', data: bondID });
  // }
  //
  // async updatePassword (password) {
  //   return await API.API().put(Config.env.auth_url + '/me', {
  //     password
  //   });
  // }

}

export default new AppAPI();
