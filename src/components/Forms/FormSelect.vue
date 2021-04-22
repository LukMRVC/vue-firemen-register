<template>
  <div class="flex flex-col space-y-2 justify-start items-start">
    <label class="capitalize" :for="name">{{ label }}</label>

    <select :name="name" :id="name" @change="$emit('update:modelValue', $event.target.value)" :value="modelValue"
            class="appearance-none border bg-white rounded p-2 focus:border-2 border-indigo-200 focus:border-indigo-400 outline-none w-full">
      <slot></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: "FormSelect",
  props: {
    modelValue: String,
    name: { type: String, required: true },
    label: String,
    placeholder: String,
  },
  emits: ['update:modelValue'],
  setup(props) {
    const name = props.name;
    const label = props.label ?? props.name.toUpperCase();
    const placeholder = props.placeholder ?? props.name;

    return { name, label, placeholder };
  }
}
</script>

<style scoped>

</style>
