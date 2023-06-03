<template>
  <div class="select__wrapper" v-if="!!option.length">
    <label class="label-input" :for="name">{{ label }}</label>
    <Transition name="select">
      <div class="select__container">
        <button
          :class="['select__btn', { 'select__btn--active': show }]"
          @click="toggleListOption"
        >
          {{ buttonText }}
        </button>
        <TransitionGroup
          appear
          name="list"
          class="select__list"
          v-if="show"
          tag="ul"
        >
          <li
            :class="[
              'select__item',
              { 'select__item--active': item.value === value },
            ]"
            :key="item.name"
            v-for="(item, idx) in option"
            @click="value = item.value"
            :data-index="idx"
          >
            {{ item.name }}
          </li>
        </TransitionGroup>
        <input class="select__input" :name="name" :id="name" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ZodType } from 'zod';
import { useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { ref, watch } from 'vue';

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
  option: {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    type: Array,
  },
});
const show = ref(false);
const { value } = useField(props.name, toTypedSchema(props.rules), {
  initialValue: props.option[0].value,
});
const buttonText = ref(props.option[0].name);
watch(value, () => {
  buttonText.value = props.option.find(
    (item) => item.value === value._value
  ).name;
});

const toggleListOption = () => {
  show.value = !show.value;
};
</script>

<style lang="scss" scoped>
@import 'MySelect';
</style>
