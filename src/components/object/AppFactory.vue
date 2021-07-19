<template>
  <div class="factory">
    <div class="factory-interface">
      <div class="factory-interface-active">
        <AppButton :text="text"/>
      </div>

      <div class="factory-interface-result">
        <p>Result:</p>
        <AppObjectLibrary/>
      </div>
    </div>

    <div class="factory-list">
      <p>Objects for {{text}}:</p>
      <AppObjectLibrary/>
    </div>
  </div>
</template>

<script lang="ts">
import AppObjectLibrary from '@/components/object/AppObjectLibrary.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'AppFactory',
  components: { AppButton, AppObjectLibrary },
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .factory {
    width:   100%;
    height:  100%;

    display:               grid;
    grid-template-columns: 5fr 10fr;
    gap:                   var(--gap);

    overflow: hidden;
  }

  .factory-interface {
    display: grid;
    gap:     var(--gap);

    overflow: auto;
  }

  .factory-interface-active,
  .factory-interface-result,
  .factory-list {
    display:         flex;
    flex-direction:  column;
    justify-content: flex-start;
    gap:             1rem;

    overflow: auto;
  }

  .factory-interface-active img {
    width: 100%;
  }
</style>
