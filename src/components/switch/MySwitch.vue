<template>
  <div :class="['switch__wrapper']">
    <div class="switch__container" @click="value = !value">
      <input
        :class="['switch', { 'switch--active': value }]"
        :id="props.name"
        value="value"
        type="checkbox"
      />
      <span
        :class="['switch__tumbler', { 'switch__tumbler--active': value }]"
      ></span>
    </div>
    <label class="switch__label" :for="props.name">{{
      value ? 'On' : 'Off'
    }}</label>
  </div>
</template>

<script setup>
import { ZodType } from 'zod';
import { useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  rules: {
    type: ZodType || null,
    required: false,
  },
});
const { value } = useField(props.name, toTypedSchema(props.rules), {
  initialValue: false,
});
</script>

<style scoped lang="scss">
@import 'MySwitch';
</style>
