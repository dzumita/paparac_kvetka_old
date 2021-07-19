<template>
  <router-link class="menu-link" :to="{ path }">
    <picture>
      <source type="image/webp" :srcset="require(`../../assets/img/menu/${name}.webp`)">
      <img class="menu-link-img" :src="require(`../../assets/img/menu/${name}.png`)" :alt="name">
    </picture>
    <p class="menu-link-text">{{name}}</p>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'AppMenuLink',
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .menu-link {
    user-select: none;

    display:        flex;
    align-items:    center;
    flex-direction: column;

    transition: var(--transition);
  }

  .menu-link:active {
    transform: var(--transformActive);

    -webkit-tap-highlight-color: transparent;
  }

  .menu-link:focus {
    outline:      none;
    filter:       var(--focusFilter);
    border-color: var(--focusBorder);

    -webkit-tap-highlight-color: transparent;
  }

  .menu-link-img {
    width:  1.6rem;
    height: 1.6rem;
  }

  .menu-link-text {
    font-size:      0.5rem;
    text-transform: uppercase;

    margin: 0;
  }
</style>
