<template>
  <th class="font-semibold text-sm uppercase px-6 py-4" :class="textAlign">
    <slot></slot>
  </th>
</template>

<script>
export default {
  name: "TableHeaderCell",
  props: {
    textAlign: String,
  },
  setup(props) {
    const textAlign = props.textAlign ? props.textAlign : '';
    return { textAlign }
  }
}
</script>

<style scoped>

</style>
