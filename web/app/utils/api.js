import axios  from 'axios';
import Config from '../config';

const AppAPI = {

  API() {
    return axios.create({
      headers: {
        common: {
          'Authorization': sessionStorage.getItem('token') || ''
        }
      }
    });
  },

  async createToken(accessToken) {
    return await AppAPI.API().post(Config.env.baseURL + '/token', { accessToken });
  },

  async fetchUserProfile() {
    return await AppAPI.API().get(Config.env.baseURL + '/me');
  }

  // async deleteBond (bondID) {
  //   return await API.API()({ method: 'delete', url: Config.env.api_url + '/bond_order', data: bondID });
  // },
  //
  // async updatePassword (password) {
  //   return await API.API().put(Config.env.auth_url + '/me', {
  //     password
  //   });
  // },

}

export default AppAPI;
