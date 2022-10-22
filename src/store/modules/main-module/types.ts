interface Tab {
  route?: string;
  tabName: string;
  withBadge: boolean;
  icon?: any;
}

interface SearchFilter {
  from: string;
  until: string;
  username: string;
  order: string;
}

export interface MainState {
  dark: boolean;
  keyboardOpen: boolean;
  networkConnected: boolean;
  cacheTest: string;
  networkInitialized: boolean;
  activeTab: number;
  isCreating: boolean;
  header: string;
  routerHistory: any[];
  lastRoute: string;
  networkStatus: any;
  tabs: Tab[];
  categoryTabs: any[];
  searchFilters: SearchFilter;
  homeCarousel: any[];
}
