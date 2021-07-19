<template>
  <button class="object">
    <picture>
      <source type="image/webp" :srcset="require(`../../assets/img/objects/${name}.webp`)">
      <img class="object-img" :src="require(`../../assets/img/objects/${name}.png`)" :alt="name">
    </picture>
  </button>
</template>

<script lang="ts">
export default {
  name: 'AppObject',
  props: {
    name: {
      type: String,
      required: true
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

    -webkit-tap-highlight-color: transparent;
  }

  .object:focus {
    outline:      none;
    background:   var(--focusBackground);
    filter:       var(--focusFilter);
    border-color: var(--focusBorder);

    -webkit-tap-highlight-color: transparent;
  }

  .object-img {
    width:  100%;
    height: 100%;
  }
</style>
