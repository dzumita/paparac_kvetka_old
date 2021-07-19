<template>
  <router-link class="menu-link" :to="{ path }">
    <img class="menu-link-img" :src="require(`../../assets/images/menu/${img}.png`)" :alt="alt">
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
    img: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false,
      default: 'link'
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
