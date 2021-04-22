<template>

  <router-link :to="{ name: routeName }" aria-current-value="page" active-class="bg-blue-900" class="text-white px-3 py-2 rounded-md text-sm font-medium">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "NavbarRouterLink",
  props: {
    routeName: String,
  },
  setup(props) {
    const routeName = props.routeName;
    return { routeName }
  }
}
</script>

<style scoped>

</style>
