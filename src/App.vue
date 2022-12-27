<script setup lang="ts">
import Button from "./components/Button.vue";
import Label from "./components/Label.vue";

const links = [
  { labelTitle: "hover", title: "Напомнить PIN-код" },
  { labelTitle: "pressed", title: "Напомнить PIN-код" },
];

const iconButtons = [
  { variant: "primary", src: "back.svg" },
  { variant: "danger", src: "cancel.svg" },
  { variant: "faq", src: "question.svg" },
  { variant: "primary", src: "arrow-right.svg" },
  { variant: "danger", src: "google-plus.svg" },
  { variant: "vk", src: "vk.svg" },
  { variant: "ok", src: "ok.svg" },
  { varinat: "edit", src: "edit.svg" },
];

const plainButtons = [
  { labelTitle: "primary", variant: "primary" },
  { labelTitle: "secondary", variant: "secondary" },
  { labelTitle: "warning", variant: "warning" },
  { labelTitle: "disabled", disabled: true },
  { labelTitle: "info", variant: "info" },
  { labelTitle: "danger", variant: "danger" },
  { labelTitle: "action", variant: "action" },
];
</script>

<template>
  <main class="main">
    <!-- LINK BUTTONS -->
    <section id="links">
      <div class="group">
        <p class="group-title">button link</p>
        <div v-for="link in links" :key="link.labelTitle">
          <Label :title="link.labelTitle" />
          <Button type="linkButton" :title="link.title" />
        </div>
      </div>
    </section>
    <!-- BUTTONS WITH ICON -->
    <section id="icon-buttons">
      <div class="group">
        <p class="group-title">button multi-sized</p>
        <Label title="icon buttons" />
        <div class="icon-buttons-group">
          <div v-for="button in iconButtons" :key="button.variant">
            <Button
              type="iconButton"
              :variant="button.variant"
              :imageSrc="button.src"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- BUTTONS WITH TIMER -->
    <section id="timer-buttons">
      <div class="group">
        <p class="group-title">button timer</p>
        <Label title="timer" />
        <Button type="timerButton" title="retry message" />
      </div>
    </section>
    <!-- PLAIN BUTTONS -->
    <section id="plain-buttons">
      <div class="group">
        <p class="group-title">button classic</p>
        <div v-for="button in plainButtons" :key="button.variant">
          <Label :title="button.labelTitle" />
          <Button
            type="plainButton"
            :variant="button.variant"
            :disabled="button.disabled"
            title="send message"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
