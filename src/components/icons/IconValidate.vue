<template>
  <svg :class="props.color" :height="props.height" :width="props.width" viewBox="0 0 32 31" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
      d="M5.66663 5.16665L15.6314 3.29826C15.875 3.25259 16.1249 3.25259 16.3685 3.29826L26.3333 5.16665V17.1533C26.3333 20.946 24.3795 24.4711 21.1633 26.4812L16.53 29.3771C16.2057 29.5797 15.7942 29.5797 15.47 29.3771L10.8366 26.4812C7.62045 24.4711 5.66663 20.946 5.66663 17.1533L5.66663 5.16665Z"
      fill="#B5B5C3" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M14.9344 19.0521C14.6249 19.0521 14.3154 18.9283 14.0679 18.6807L11.5922 16.205C11.097 15.7099 11.097 14.9672 11.5922 14.472C12.0873 13.9769 12.8919 13.9769 13.3252 14.472L14.9344 16.0812L19.0193 11.9964C19.5144 11.5012 20.2571 11.5012 20.7522 11.9964C21.2474 12.4915 21.2474 13.2342 20.7522 13.7293L15.8009 18.6807C15.5533 18.9283 15.2438 19.0521 14.9344 19.0521Z"
      fill="#B5B5C3" />
  </svg>

</template>

<script lang="ts" setup>
const props = defineProps({
  width: {
    type: String,
    default: '31px'
  },
  height: {
    type: String,
    default: '31px'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<style scoped></style>