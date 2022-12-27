<script setup lang="ts">
import { computed, defineProps } from "vue";
const props = defineProps({
  title: String,
});

const title = computed(() => props.title)
</script>

<template>
  <p class="label">{{ title }}</p>
</template>

<style lang="scss" scoped>
.label {
  text-align: left;
  text-transform: uppercase;
}
</style>
