<template>
  <div class="factory">
    <div class="factory-interface">
      <div class="factory-interface-result">
        <AppObjectLibrary :objects="result" title="Result:"/>
      </div>

      <div class="factory-interface-active">
        <AppButton :text="text"/>
      </div>
    </div>

    <div class="factory-list">
      <AppObjectLibrary :objects="list" :title="`Objects for ${text}:`"/>
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
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup () {
    const list = [
      { id: 11, name: 'waterClass', count: '1' },
      { id: 12, name: 'fireClass', count: '1' },
      { id: 13, name: 'earid', count: '1' }
    ]
    const result = [{ id: 15, name: 'unknow', count: '1' }]
    return { list, result }
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
    height: 100%;

    display: grid;
    gap:     var(--gap);

    overflow: auto;
  }

  .factory-interface-active,
  .factory-interface-result,
  .factory-list {
    height: 100%;
    width:  100%;

    display:         grid;
    gap:             1rem;

    overflow: auto;
  }

  .factory-interface-active {
    align-content: end;
  }

  .factory-interface-active img {
    width: 100%;
  }
</style>
