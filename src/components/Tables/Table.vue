<template>
  <!-- Table -->
  <table class='mx-auto max-w-full w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
    <thead class="bg-gray-50">
    <tr class="text-gray-600 text-left">
      <slot name="header"></slot>
    </tr>

    </thead>
    <tbody class="divide-y divide-gray-200">
    <slot></slot>
<!--    <tr v-for="fireman in firemen" :key="fireman.id">-->
<!--      <td class="px-6 py-4">-->
<!--        <div class="flex items-center space-x-3">-->
<!--          <div>-->
<!--            <p class="">-->
<!--              {{ fullname(fireman) }}-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </td>-->
<!--      <td class="px-6 py-4">-->
<!--        <p>-->
<!--          {{ fireman.address.address }}-->
<!--        </p>-->
<!--        <p class="text-gray-500 text-sm font-semibold tracking-wide">-->
<!--          {{ fireman.address.city }}-->
<!--        </p>-->
<!--      </td>-->
<!--      <td class="px-6 py-4 text-center">-->
<!--        <span :class="{ 'bg-green-200': fireman.hasJacket }" class="text-green-800 font-semibold px-3 py-1 rounded-full">-->
<!--            {{ fireman.hasJacket ? 'Ano' : 'Ne' }}-->
<!--        </span>-->
<!--      </td>-->
<!--      <td class="px-6 py-4 text-center">-->
<!--        {{ fireman.id }}-->
<!--      </td>-->
<!--      <td class="px-6 py-4 text-center">-->
<!--        <a href="#" class="text-purple-800 hover:underline">Upravit</a>-->
<!--      </td>-->
<!--    </tr>-->
    </tbody>
    <tfoot>
      <slot name="footer"></slot>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "Table",
}
</script>

<style scoped>

</style>
