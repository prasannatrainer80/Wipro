import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1122/auth/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'welcome');
  }

  getUserBoard() {
    alert(authHeader());
    return axios.get(API_URL + 'user/userProfile', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
