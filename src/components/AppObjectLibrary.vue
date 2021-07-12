<template>
  <div class="object-library">
    <div class="object-library-content">
      <AppObject v-for="element in elements" :key="element"/>
    </div>
  </div>
</template>

<script lang="ts">
import AppObject from '@/components/AppObject.vue'

export default {
  name: 'AppObjectLibrary',
  components: { AppObject },
  data () {
    return { elements: 200 }
  }
}
</script>

<style scoped>
  .object-library {
    width:   100%;
    height:  100%;
    padding: var(--padding);

    overflow: auto;
  }

  .object-library-content {
    width:         100%;
    height:        100%;
    padding-right: var(--padding);

    display:               grid;
    grid-template-columns: repeat(auto-fill, 2.5rem);
    grid-template-rows:    repeat(auto-fill, 2.5rem);
    grid-gap:              var(--padding);
    place-content:         space-between;

    overflow: auto;
  }
</style>
