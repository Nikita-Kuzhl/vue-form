<template>
  <form @submit.prevent :class="['form', $attrs.class]">
    <template v-for="input in inputs" :key="input.name">
      <MyInput
        v-if="input.typeName === 'text' || input.typeName === 'password'"
        :type="input.typeName"
        :rules="input.rules"
        :name="input.name"
        :text="input.text"
        :label="input.label"
      />
      <MyCheckbox
        v-if="input.typeName === 'checkbox'"
        :type="input.typeName"
        :rules="input.rules"
        :name="input.name"
        :label="input.label"
      />
      <MySwitch
        v-if="input.typeName === 'switch'"
        :name="input.name"
        :label="input.label"
        :type="input.typeName"
        :rules="input.rules"
      />
      <MyRadio
        v-if="input.typeName === 'radio'"
        :name="input.name"
        :label="input.label"
        :type="input.typeName"
        :rules="input.rules"
        :values-radio="input.valuesRadio"
      />
      <MySelect
        v-if="input.typeName === 'select'"
        :name="input.name"
        :label="input.label"
        :type="input.typeName"
        :rules="input.rules"
        :option="input.option"
      />
    </template>
    <div class="btn__wrapper">
      <MyButton @click="resetForm" type="reset">Cancel</MyButton>
      <MyButton @click="onSubmit" type="submit">Next</MyButton>
    </div>
  </form>
</template>

<script setup>
import { ZodType } from 'zod';
import MyInput from '../input/MyInput.vue';
import { useForm } from 'vee-validate';
import MyButton from '@/components/button/MyButton.vue';
import MyCheckbox from '@/components/checkbox/MyCheckbox.vue';
import MySwitch from '@/components/switch/MySwitch.vue';
import MyRadio from '@/components/radio/MyRadio.vue';
import MySelect from '@/components/select/MySelect.vue';

const props = defineProps({
  inputs: {
    type: Array,
    name: {
      type: String,
      required: true,
    },
    rules: {
      type: ZodType || null,
      required: false,
    },
    typeName: {
      type: String,
      required: true,
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
    option: {
      name: {
        type: String,
      },
      value: {
        type: String,
      },
      type: Array,
    },
    required: true,
  },
  onHandleSubmit: {
    type: Function,
  },
});

const { handleSubmit, resetForm } = useForm();

const onSubmit = handleSubmit((values) => {
  props.onHandleSubmit(values);
});
</script>

<style scoped lang="scss">
@import 'MyForm';
</style>
