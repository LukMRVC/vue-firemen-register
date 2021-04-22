<template>
  <td class="px-6 py-4">
    <p>
      <slot></slot>
    </p>
    <p class="text-gray-500 text-sm font-semibold tracking-wide">
      <slot name="city"></slot>
    </p>
  </td>
</template>

<script>
export default {
  name: "TableAddressCell"
}
</script>

<style scoped>

</style>
