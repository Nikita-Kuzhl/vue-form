<template>
  <div class="radio__wrapper" v-if="!!valuesRadio.length">
    <div
      class="radio__container"
      v-for="item in valuesRadio"
      :key="item.value"
      @click="value = item.value"
    >
      <label :for="name" class="radio">
        <input
          type="radio"
          :id="name"
          :name="name"
          :value="item.value"
          class="radio__input"
        />
        <TransitionOpacity>
          <span v-show="item.value === value" class="radio__active" />
        </TransitionOpacity>
      </label>
      <span class="radio__text label-text">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ZodType } from 'zod';
import { useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import TransitionOpacity from '@/components/transition-opacity/TransitionOpacity.vue';

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
  valuesRadio: {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    type: Array,
  },
});
const { value } = useField(props.name, toTypedSchema(props.rules), {
  initialValue: props.valuesRadio[0].value,
});
</script>

<style lang="scss" scoped>
@import 'MyRadio';
</style>
