import { MainModule } from './modules/main-module/index';
import { createStore } from "vuex";
import { AuthModule } from "./modules/auth-module";
import { UsersModule } from './modules/users-module';

const store = createStore({
  modules: {
    AuthModule,
    MainModule,
    UsersModule,
  },
})

export interface RootState {}
export default store;