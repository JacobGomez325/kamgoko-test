<template>
  <svg :class="props.color" :height="props.height" :width="props.width" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.125 7.875C6.125 10.3603 8.13972 12.375 10.625 12.375C13.1103 12.375 15.125 10.3603 15.125 7.875C15.125 5.38972 13.1103 3.375 10.625 3.375C8.13972 3.375 6.125 5.38972 6.125 7.875ZM17.375 12.375C17.375 14.239 18.886 15.75 20.75 15.75C22.614 15.75 24.125 14.239 24.125 12.375C24.125 10.511 22.614 9 20.75 9C18.886 9 17.375 10.511 17.375 12.375Z" fill="#B5B5C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6063 14.625C5.29465 14.625 0.936791 17.3548 0.500733 22.7241C0.476981 23.0166 1.0363 23.625 1.31844 23.625H19.9025C20.7477 23.625 20.7608 22.9449 20.7477 22.725C20.418 17.2048 15.9926 14.625 10.6063 14.625ZM26.8879 23.625L22.55 23.625C22.55 21.0927 21.7133 18.7558 20.3013 16.8757C24.1336 16.9176 27.2628 18.8551 27.4983 22.95C27.5078 23.1149 27.4983 23.625 26.8879 23.625Z" fill="#B5B5C3"/>
</svg>


</template>

<script lang="ts" setup>
const props = defineProps({
  width: {
    type: String,
    default: '28px'
  },
  height: {
    type: String,
    default: '27px'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<style scoped></style>