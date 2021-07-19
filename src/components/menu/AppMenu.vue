<template>
  <div class="app-menu">
    <AppMenuLink name="paparac" path="/"/>
    <AppMenuLink name="shop" path="/shop"/>
    <AppMenuLink name="furnace" path="/furnace"/>
    <AppMenuLink name="info" path="/info"/>
    <AppMenuLink name="settings" path="/settings"/>
  </div>
</template>

<script lang="ts">
import AppMenuLink from '@/components/menu/AppMenuLink.vue'

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
