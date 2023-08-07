<template>
  <button class="btn" @click="$emit('click-btn', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyBtn",
};
</script>

<style></style>
