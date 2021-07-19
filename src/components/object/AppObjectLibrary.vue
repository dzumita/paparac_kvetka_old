<template>
  <div class="object-library">
    <div class="object-library-content">
      <AppObject v-for="object in objects" :key="object.id" :name="object.name"/>
    </div>
  </div>
</template>

<script lang="ts">
import AppObject from '@/components/object/AppObject.vue'

export default {
  name: 'AppObjectLibrary',
  components: { AppObject },
  props: {
    objects: {
      type: Array,
      required: true
    }
  },
  setup (): { elements:number } {
    const elements = 25
    return { elements }
  }
}
</script>

<style scoped>
  .object-library {
    width:   100%;
    height:  100%;

    overflow: hidden;
  }

  .object-library-content {
    width:         100%;
    height:        100%;
    padding-right: var(--padding);

    display:               grid;
    grid-template-columns: repeat(auto-fill, var(--objectIconSize));
    grid-template-rows:    repeat(auto-fill, var(--objectIconSize));
    grid-gap:              var(--padding);
    justify-content:       space-evenly;

    overflow: auto;
  }
</style>
