<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <keep-alive>
    <AppMenu/>
  </keep-alive>
</template>

<script lang="ts">
import AppMenu from '@/components/AppMenu.vue'

export default {
  components: { AppMenu }
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
  padding:    var(--padding);
  max-width:  var(--maxWidth);
  max-height: var(--maxHeight);

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

/*~~~Temporarily~~~*/
h1, p {
  width:  fit-content;
  height: fit-content;
  margin: 0;
}
</style>
