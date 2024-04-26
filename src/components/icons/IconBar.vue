<template>
  <svg :class="props.color" :height="props.height" :width="props.width" viewBox="0 0 28 27" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M6.00003 3.375C5.44775 3.375 5.00003 3.82271 5.00003 4.375V22.625C5.00003 23.1773 5.44775 23.625 6.00003 23.625H7.37503C7.92731 23.625 8.37503 23.1773 8.37503 22.625V4.375C8.37503 3.82272 7.92731 3.375 7.37503 3.375H6.00003ZM11.625 3.375C11.0727 3.375 10.625 3.82271 10.625 4.375V22.625C10.625 23.1773 11.0727 23.625 11.625 23.625H13C13.5523 23.625 14 23.1773 14 22.625V4.375C14 3.82272 13.5523 3.375 13 3.375H11.625Z"
      fill="#B5B5C3" />
    <rect opacity="0.3" x="15.6617" y="4.41473" width="3.375" height="20.25" rx="1"
      transform="rotate(-19 15.6617 4.41473)" fill="#B5B5C3" />
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