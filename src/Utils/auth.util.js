import localStore from './localstore.util';
import { updateHeaders } from '../services/HttpProvider';

export const getToken = () => localStore.get_data('tokenConcord');

export const setToken = token => localStore.store_data('tokenConcord', token);
export const setUserRole = token => localStore.store_data('userRoleConcord', token);

export const getUser = () => localStore.get_data('userConcord');
export const saveUser = user => localStore.store_data('userConcord', user);



export const logout = async () => {
  await localStore.remove_data('tokenConcord');
  await localStore.remove_data('userConcord')
  await localStore.remove_data('userRoleConcord')
  await updateHeaders();
  return true;
};

class Auth {
  constructor() {
    this.user = {};
  }

  async setUserFromLocal() {
    const user = await getToken();
    this.user = user ? user : {};
  }

  set setUser(user) {
    this.user = user;
  }

  get getUser() {
    return this.user;
  }

  async logout() {
    await logout();
    this.user = {};
  }
}

export const authClass = new Auth();
