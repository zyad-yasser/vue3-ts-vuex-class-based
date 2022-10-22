import { Module } from 'vuex';
import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';
import { RootState } from '../../index';
import { MainState } from './types';

const state: MainState = {
  dark: false,
  keyboardOpen: false,
  networkConnected: true,
  cacheTest: '',
  networkInitialized: false,
  activeTab: 0,
  isCreating: false,
  header: "default",
  routerHistory: [],
  lastRoute: "/home",
  networkStatus: {
    connected: true
  },
  tabs: [
    {
      route: "/home",
      tabName: "home",
      withBadge: true,
      icon: 'homeOutline',
    },
    {
      route: "/search",
      tabName: "search",
      withBadge: false,
      icon: 'searchOutline',
    },
    {
      tabName: "create",
      withBadge: false,
      icon: 'createOutline',
    },
    {
      route: "/notifications",
      tabName: "notifications",
      withBadge: true,
      icon: 'notificationsOutline',
    },
    {
      route: "/chat",
      tabName: "chat",
      withBadge: true,
      icon: 'chatboxOutline',
    }
  ],
  categoryTabs: [],
  searchFilters: {
    from: "",
    until: "",
    username: "",
    order: ""
  },
  homeCarousel: []
};

export const MainModule: Module<MainState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
