<template>
  <div class="factory">
    <div class="factory-interface">
      <div class="factory-interface-active">
<!--        <img :src="require(`../assets/images/menu/${img}.png`)" :alt="alt">-->
        <AppButton :text="text"/>
      </div>

      <div class="factory-interface-result">
        <p>Result:</p>
        <AppObjectLibrary/>
      </div>
    </div>

    <AppObjectLibrary/>
  </div>
</template>

<script lang="ts">
import AppObjectLibrary from '@/components/AppObjectLibrary.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'AppFactory',
  components: { AppButton, AppObjectLibrary },
  props: {
    img: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .factory {
    width:   100%;
    height:  100%;

    display:               grid;
    grid-template-columns: 1fr 3fr;
    gap:                   var(--padding);

    overflow: hidden;
  }

  .factory-interface {
    border:        var(--border);
    border-radius: var(--borderRadius);

    display: grid;

    padding: var(--padding);
    gap: 1rem;

    overflow: auto;
  }

  .factory-interface-active,
  .factory-interface-result {
    display:         flex;
    flex-direction:  column;
    justify-content: start;

    gap: 1rem;
    overflow: auto;
  }

  .factory-interface-active img {
    width: 100%;
  }
</style>
