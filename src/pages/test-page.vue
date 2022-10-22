<template>
  <div>
    <TestComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TestComponent from '../components/test-component.vue'

@Options({
  name: 'TestPage',
  components: {
    TestComponent
  },
})
export default class AboutPage extends Vue {
}
</script>

<style scoped lang="sass">
</style>
