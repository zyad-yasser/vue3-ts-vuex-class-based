<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { jwtInterceptor } from './interceptors/headers';
import store from './store';

@Options({
  name: 'App',
})
export default class App extends Vue {
  public async beforeCreate() {
    await jwtInterceptor();
  }

  public get dark() {
    return store.getters['MainModule/dark'];
  }

  @Watch('dark')
  darkChanged(value: boolean) {
    document.body.classList.toggle('dark', value);
  }

  public toggleDarkness() {
    return store.dispatch('MainModule/toggleDarkness');
  }
}
</script>
<style lang="sass">
.not-connected
  pointer-events: none
  opacity: 0.7
</style>
