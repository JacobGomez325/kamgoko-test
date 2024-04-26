<template>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" :class="props.color" :height="props.height" :width="props.width" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"></path></svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  width: {
    type: String,
    default: '1em'
  },
  height: {
    type: String,
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<style scoped></style>