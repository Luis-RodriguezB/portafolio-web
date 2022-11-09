<template>
  <div :class="inputContainerClass">
    <label :for="id">{{ label }}</label>
    <textarea
      v-if="typeField === 'textarea'"
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :class="[inputClass, { 'is-invalid': errors.length > 0 }]"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <input
      v-else
      :type="typeField"
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :class="[inputClass, { 'is-invalid': errors.length > 0 }]"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="errors.length > 0" class="error-message">
      {{ typeof errors === 'string' ? errors : errors[0].$message }}
    </span>
  </div>
</template>

<script lang="js">
export default {
  props: {
    inputContainerClass: {
      type: String,
      default: 'form-group',
    },
    label: {
      type: String,
    },
    typeField: {
      type: String,
      default: 'text',
    },
    inputClass: {
      type: String,
      default: 'formField',
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    modelValue: {
      type: String,
      default: '',
    },
    errors: {
      type: [String, Array],
      default: [],
    },
  },
};
</script>