<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "plainButton",
  },
  variant: {
    type: String,
    default: "primary",
  },
  title: String,
  imageSrc: String,
});

const disabled = ref<boolean>(false);
const isPlainButton = computed<boolean>(() => props.type === "plainButton");
const isIconButton = computed<boolean>(() => props.type === "iconButton");
const isTimerButton = computed<boolean>(() => props.type === "timerButton");
const isLinkButton = computed<boolean>(() => props.type === "linkButton");

const startTimer = (minutes: number): void => {
  let time: number = minutes * 60;
  const timerWrapper = document.querySelector("span.timer")! as HTMLSpanElement;

  const timer = setInterval(() => {
    if (time >= 0) {
      disabled.value = true;
      timerWrapper.textContent = formatTime(time);
      time = time - 1;
    } else {
      timerWrapper.textContent = "";
      disabled.value = false;
      clearInterval(timer);
    }
  }, 1000);
};
const formatTime = (value: number): string => {
  let time: number = value / 60;
  let minutes: any = parseInt(time.toString());
  let seconds: any = Math.round((time - minutes) * 60);
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
};
</script>

<template>
  <!-- PLAIN BUTTON -->
  <template v-if="isPlainButton">
    <button class="plain-button" :class="variant" v-bind="$attrs">
      {{ title }}
    </button>
  </template>
  <!-- BUTTON WITH ICON -->
  <template v-if="isIconButton">
    <button class="icon-button" :class="variant" v-bind="$attrs">
      <img :src="`assets/icons/${props.imageSrc}`" alt="logo" />
    </button>
  </template>
  <!-- BUTTON WITH TIMER -->
  <template v-if="isTimerButton">
    <button class="timer-button" :disabled="disabled" @click="startTimer(3)">
      <p>{{ title }} <span v-show="disabled" class="timer"></span></p>
    </button>
  </template>
  <!-- LINK BUTTON -->
  <template v-if="isLinkButton">
    <a href="javascript:void" class="link-button">{{ title }}</a>
  </template>
</template>

<style lang="scss" scoped>
@import "../assets/scss/buttons";
</style>
