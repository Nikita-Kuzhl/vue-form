<template>
  <div class="checkbox__wrapper">
    <div class="checkbox__container" @click="value = !value">
      <input class="checkbox" :value="value" type="checkbox" />
      <TransitionOpacity>
        <Check v-show="value" class="checkbox__icon" />
      </TransitionOpacity>
    </div>
    <label class="checkbox__label label-text">{{ props.label }}</label>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { ZodType } from 'zod';
import Check from '@/components/icons/Check.vue';
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
});
const { value } = useField(props.name, toTypedSchema(props.rules), {
  initialValue: false,
});
</script>

<style lang="scss" scoped>
@import 'MyCheckbox';
</style>
