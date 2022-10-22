import { Module } from 'vuex';
import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';
import { RootState } from '../../index';
import { UsersState } from './types';

const state: UsersState = {
  users: {},
  follows: {},
  ids: [],
  lastPaging: {},
  loading: false
};

export const UsersModule: Module<UsersState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
