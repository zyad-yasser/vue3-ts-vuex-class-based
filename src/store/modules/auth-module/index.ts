import { Module } from 'vuex';
import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';
import { RootState } from '../../index';
import { AuthState } from './types';

const state: AuthState = {
  authToken: '',
  id: '',
  user: {},
  preparedUserUpdates: {},
  uploading: 0,
  referrer: null,
  loggedIn: false,
  notificationsInitialized: false,
  notificationsList: [],
  isLoggingOut: false
};

export const AuthModule: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
