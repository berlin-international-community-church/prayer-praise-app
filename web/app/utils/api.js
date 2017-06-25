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

  async createToken (accessToken) {
    return await AppAPI.API().post(Config.env.tokenURL, { accessToken });
  },

  // async fetchUserProfile () {
  //   return await B2BAPI.API().get(Config.env.auth_url + '/me');
  // },
  //
  // async deleteBond (bondID) {
  //   return await B2BAPI.API()({ method: 'delete', url: Config.env.api_url + '/bond_order', data: bondID });
  // },
  //
  // async updatePassword (password) {
  //   return await B2BAPI.API().put(Config.env.auth_url + '/me', {
  //     password
  //   });
  // },

}

export default AppAPI;
