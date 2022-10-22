<template>
  <div>
    Home
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TestComponent from '../components/test-component.vue'

@Options({
  name: 'HomePage',
  components: {},
})
export default class HomePage extends Vue {
}
</script>

<style scoped lang="sass">
</style>
