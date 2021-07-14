<template>
  <div class="object">
    <img class="object-img" :src="require(`../assets/images/objects/${img}.png`)" :alt="title" :title="title">
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppObject',
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .object {
    width:  var(--objectIconSize);
    height: var(--objectIconSize);

    overflow: hidden;
  }

  .object-img {
    width:  100%;
    height: 100%;
  }
</style>
