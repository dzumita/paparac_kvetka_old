<template>
  <div class="app-menu">
    <AppMenuLink img="paparac" name="paparac" path="/" alt="fern"/>
    <AppMenuLink img="talerMoney" name="shop" path="/shop" alt="shop"/>
    <AppMenuLink img="furnace" name="furnace" path="/furnace" alt="furnace"/>
    <AppMenuLink img="info" name="info" path="/info" alt="info"/>
    <AppMenuLink img="gear" name="settings" path="/settings" alt="settings"/>
  </div>
</template>

<script lang="ts">
import AppMenuLink from '@/components/AppMenuLink.vue'

export default {
  name: 'AppMenu',
  components: { AppMenuLink }
}
</script>

<style scoped>
  .app-menu {
    padding: var(--padding);

    display:         flex;
    justify-content: center;
    align-items:     center;
    gap:             var(--gap);

    overflow-y: auto;
  }

  .app-menu .router-link-active {
    color:var(--activeColor);

    position: relative;
  }

  .app-menu .router-link-active:before {
    content: '';

    background:    var(--activeColor);
    border-radius: var(--borderRadius);

    width:  100%;
    height: 2px;

    position: absolute;
    bottom:   -0.2rem;
    left:     0;
  }
</style>
