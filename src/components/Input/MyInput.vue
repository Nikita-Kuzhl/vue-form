<template>
  <div
    :class="[
      'input__container',
      { 'input__container--with-text': !!props.text },
    ]"
  >
    <label class="input__label label-input" :for="props.name">{{
      props.label
    }}</label>
    <input
      :class="['input', { 'input--error': isError }]"
      :placeholder="props.label"
      v-bind="$attrs"
      :id="props.name"
      v-model="value"
    />
    <TransitionOpacity>
      <span class="input__error-message input-text" v-if="isError">{{
        errorMessage
      }}</span>
    </TransitionOpacity>
    <TransitionOpacity>
      <span
        class="input__text input-text"
        v-if="props.text"
        v-show="!isError"
        >{{ props.text }}</span
      >
    </TransitionOpacity>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { ZodType } from 'zod';
import { computed } from 'vue';
import TransitionOpacity from '@/components/TransitionOpacity/TransitionOpacity.vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  rules: {
    type: ZodType || null,
    required: false,
  },
  label: {
    type: String,
  },
  text: {
    type: String,
  },
});
const { value, errorMessage } = useField(
  props.name,
  toTypedSchema(props.rules)
);

const isError = computed(() => {
  return !!errorMessage.value && !!value._value;
});
</script>

<style lang="scss" scoped>
@import 'MyInput';
</style>
