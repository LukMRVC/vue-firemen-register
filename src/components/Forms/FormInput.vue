<template>
  <div class="flex flex-col space-y-2 justify-start items-start">
    <label class="capitalize" :for="name">{{ label }}</label>
    <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" :name="name" :id="name"
           :required="required"
           class="p-2 self-stretch border focus:border-2 border-indigo-200 rounded focus:border-indigo-400 focus:outline-none focus:shadow-sm">
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: String,
    type: { type: String, required: true },
    name: { type: String, required: true },
    label: String,
    placeholder: String,
  },
  emits: ['update:modelValue'],
  setup(props, { attrs }) {
    const required = 'required' in attrs;
    const name = props.name;
    const label = props.label ?? props.name.toUpperCase();
    const placeholder = props.placeholder ?? props.name;

    return { name, label, placeholder, required };
  }
}
</script>

<style scoped>

</style>
