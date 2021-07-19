<template>
  <button class="button">{{text}}</button>
</template>

<script lang="ts">
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .button {
    background:    transparent;
    border:        var(--border);
    border-radius: var(--borderRadius);

    font-size:      0.7rem;
    font-family:    var(--mainFont);
    color:          var(--activeColor);
    text-transform: uppercase;

    width:   100%;
    padding: calc(var(--padding) / 2) var(--padding);

    cursor:      pointer;
    user-select: none;

    transition: var(--transition);
  }

  .button:active {
    transform: var(--transformActive);

    -webkit-tap-highlight-color: transparent;
  }

  .button:focus {
    outline:      none;
    background:   var(--focusBackground);
    filter:       var(--focusFilter);
    border-color: var(--focusBorder);

    -webkit-tap-highlight-color: transparent;
  }
</style>
