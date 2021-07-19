<template>
  <button class="object">
    <picture>
      <source type="image/webp" :srcset="require(`../../assets/img/objects/${img}.webp`)">
      <img class="object-img" :src="require(`../../assets/img/objects/${img}.png`)" :alt="title">
    </picture>
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
      required: false,
      default: 'object'
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
