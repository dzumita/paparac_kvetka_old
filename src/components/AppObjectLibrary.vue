<template>
  <div class="object-library">
    <div class="object-library-content">
      <AppObject v-for="element in elements" :key="element" img="empty" title="Empty"/>
      <AppObject v-for="element in elements" :key="element" img="fire" title="Fire"/>
      <AppObject v-for="element in elements" :key="element" img="water" title="Water"/>
      <AppObject v-for="element in elements" :key="element" img="energy" title="Energy"/>
      <AppObject v-for="element in elements" :key="element" img="firid" title="Firid"/>
    </div>
  </div>
</template>

<script lang="ts">
import AppObject from '@/components/AppObject.vue'

export default {
  name: 'AppObjectLibrary',
  components: { AppObject },
  data () {
    return { elements: 15 }
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
    grid-template-columns: repeat(auto-fill, 3rem);
    grid-template-rows:    repeat(auto-fill, 3rem);
    grid-gap:              var(--padding);
    place-content:         space-between;

    overflow: auto;
  }
</style>
