<template>
  <button class="object">
    <img class="object-img" :src="require(`../assets/images/objects/${img}.png`)" :alt="title" :title="title">
  </button>
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
    background:    transparent;
    border:        var(--border);
    border-radius: var(--borderRadius);

    width:  var(--objectIconSize);
    height: var(--objectIconSize);

    overflow: hidden;

    user-select: none;
    cursor:      pointer;

    transition: var(--transition);
  }

  .object:active {
    transform: var(--transformActive);
  }

  .object:focus {
    outline:      none;
    background:   var(--focusBackground);
    filter:       var(--focusFilter);
    border-color: var(--focusBorder);
  }

  .object-img {
    width:  100%;
    height: 100%;
  }
</style>
