// TODO: Add user type
export interface AuthState {
  authToken?: string;
  id?: string;
  user?: any;
  preparedUserUpdates: any;
  uploading?: number;
  referrer?: any;
  loggedIn?: boolean;
  notificationsInitialized?: boolean;
  notificationsList: any[];
  isLoggingOut: boolean;
}

export type Logout = () => void;