<template>
  <teleport to="body">
    <TransitionOpacity>
      <section class="modal__wrapper" v-show="show">
        <div class="modal" v-click-outside="changeShow">
          <pre>{{ values }}</pre>
          <button @click="changeShow" class="modal__close">X</button>
        </div>
      </section>
    </TransitionOpacity>
  </teleport>
</template>

<script setup>
import TransitionOpacity from '@/components/TransitionOpacity/TransitionOpacity.vue';

defineProps({
  values: {
    checkbox: {
      type: String,
    },
    label: { type: String },
    password: {
      type: String,
    },
    radio: {
      type: String,
    },
    select: {
      type: String,
    },
    switch: {
      type: String,
    },
    username: {
      type: String,
    },
  },
  show: {
    type: Boolean,
  },
  changeShow: {
    type: Function,
  },
});
</script>

<style lang="scss">
@import 'MyModal';
</style>
