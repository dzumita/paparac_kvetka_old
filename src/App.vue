<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :inventory="inventory"/>
    </transition>
  </router-view>
  <keep-alive>
    <AppMenu/>
  </keep-alive>
</template>

<script lang="ts">
import AppMenu from '@/components/menu/AppMenu.vue'

export default {
  components: { AppMenu },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup () {
    const inventory = [
      { id: 0, name: 'empty', count: '1' },
      { id: 1, name: 'antiempty', count: '3' },
      { id: 2, name: 'dirty', count: '8' },
      { id: 3, name: 'dirtyClass', count: '9' },
      { id: 4, name: 'dust', count: '5' },
      { id: 5, name: 'earid', count: '6' },
      { id: 6, name: 'empty', count: '5' },
      { id: 7, name: 'energy', count: '5' },
      { id: 8, name: 'energyClass', count: '1' },
      { id: 9, name: 'fire', count: '3' },
      { id: 10, name: 'fireClass', count: '4' },
      { id: 11, name: 'firid', count: '5' },
      { id: 12, name: 'sand', count: '0' },
      { id: 13, name: 'stone', count: '5' },
      { id: 14, name: 'strumenid', count: '6' },
      { id: 15, name: 'unknow', count: '5' },
      { id: 16, name: 'watenid', count: '1' },
      { id: 17, name: 'water', count: '1' },
      { id: 18, name: 'waterClass', count: '5' }
    ]

    return { inventory }
  }
}
</script>

<style>
  @import url("./assets/styleGuide.css");
  @import url("./assets/effects.css");

  * {
    box-sizing: border-box;
  }

  html {
    background: var(--background);
  }

  html, body {
    width:  100vw;
    height: 100vh;
    margin: 0;

    display:         flex;
    justify-content: center;
    align-items:     center;

    overflow: hidden;
  }

  #app {
    color:      var(--fontColor);
    text-align: center;

    width:      100%;
    height:     100%;
    max-width:  1000px;
    max-height: 1000px;
    min-width:  300px;
    padding:    var(--padding);

    display:               grid;
    grid-template-rows:    calc(100% - 3.8rem) 3.8rem;
    grid-template-columns: 1fr;
    justify-content:       center;

    overflow: hidden;
  }

  #app a {
    color:           var(--fontColor);
    text-decoration: none;
  }

  #app a:visited {
    color: var(--fontColor);
  }
</style>
