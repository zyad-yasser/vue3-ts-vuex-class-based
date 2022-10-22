<template>
  <div class="wrapper">
    Test
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Options } from 'vue-property-decorator';

@Options({
  name: 'LoggingOut',
  components: {},
})
export default class TestComponent extends Vue {}
</script>

<style scoped lang="sass">
</style>
