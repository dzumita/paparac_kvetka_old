<template>
  <div class="app-page">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppPageWrapper',
  props: {
    gridRows: {
      type: String,
      required: false,
      default: 'auto'
    }
  }
}
</script>

<style scoped>
  .app-page {
    width:   100%;
    padding: var(--padding);

    display: grid;
    gap:     var(--gap);
    grid-template-rows: v-bind(gridRows);

    overflow: auto;
  }
</style>
