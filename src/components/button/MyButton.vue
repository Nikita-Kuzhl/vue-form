<template>
  <button
    :class="['btn', { 'btn--submit': $attrs.type === 'submit' }]"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
@import 'MyButton';
</style>
