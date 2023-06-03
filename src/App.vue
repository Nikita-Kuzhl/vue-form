<template>
  <MyForm :inputs="inputs" :on-handle-submit="onSubmit" />
  <my-modal :values="value" :change-show="changeShow" :show="show" />
</template>

<script setup>
import MyForm from '@/components/form/MyForm.vue';
import zod from 'zod';
import { ref } from 'vue';
import MyModal from '@/components/Modal/MyModal.vue';
const inputs = ref([
  {
    name: 'username',
    typeName: 'text',
    rules: zod.string().min(4, 'Min 4'),
    label: 'Username',
  },
  {
    name: 'password',
    typeName: 'password',
    rules: zod
      .string()
      .min(4, 'Your password is between 4 and 12 characters')
      .max(16, 'Your password is between 4 and 12 characters'),
    label: 'Password',
    text: 'Your password is between 4 and 12 characters',
  },
  {
    name: 'label',
    typeName: 'text',
    rules: zod.string().min(4, 'Error message informing me of a problem'),
    label: 'Input Text Label',
  },
  {
    name: 'checkbox',
    typeName: 'checkbox',
    rules: zod.preprocess((value) => value === 'on', zod.boolean()),
    label: 'Remember me',
  },
  {
    name: 'switch',
    typeName: 'switch',
    rules: zod.preprocess((value) => value === 'on', zod.boolean()),
  },
  {
    name: 'radio',
    typeName: 'radio',
    rules: zod.enum([
      'radio-selection-1',
      'radio-selection-2',
      'radio-selection-3',
    ]),
    valuesRadio: [
      {
        name: 'Radio selection 1',
        value: 'radio-selection-1',
      },
      {
        name: 'Radio selection 2',
        value: 'radio-selection-2',
      },
      {
        name: 'Radio selection 3',
        value: 'radio-selection-3',
      },
    ],
  },
  {
    name: 'select',
    typeName: 'select',
    label: 'Dropdown Title',
    rules: zod.enum([
      'dropdown-option',
      'dropdown-option-1',
      'dropdown-option-2',
    ]),
    option: [
      {
        name: 'Dropdown option',
        value: 'dropdown-option',
      },
      {
        name: 'Dropdown option 1',
        value: 'dropdown-option-1',
      },
      {
        name: 'Dropdown option 2',
        value: 'dropdown-option-2',
      },
    ],
  },
]);
const value = ref({});
const show = ref(false);
const onSubmit = (values) => {
  value.value = values;
  console.log(values);
  show.value = true;
};
const changeShow = () => {
  show.value && (show.value = false);
};
</script>

<style></style>
