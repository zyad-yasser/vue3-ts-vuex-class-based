import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { MainState } from './types';

export const getters: GetterTree<MainState, RootState> = {
  dark: (state: MainState) => {
    return state.dark;
  },
  tabs: (state: MainState) => {
    return state.tabs;
  },
  keyboardOpen: (state: MainState) => {
    return state.keyboardOpen;
  },
  networkConnected: (state: MainState) => {
    return state.networkConnected;
  },
  cacheTest: (state: MainState) => {
    return state.cacheTest;
  },
  networkInitialized(state) {
    return state.networkInitialized;
  },
  networkStatus(state) {
    return state.networkStatus;
  },
  homeCarousel: state => state.homeCarousel,
  activeTab: state => state.activeTab,
  header: state => state.header,
  isCreating: state => state.isCreating,
  searchFilters: state => state.searchFilters,
  categoryTabs: state => state.categoryTabs,
  routerHistory: state => state.routerHistory,
  lastRoute: state => {
    const routerHistory = [...state.routerHistory];
    const lastRoute = routerHistory[routerHistory.length - 1];
    return lastRoute;
  }
};
