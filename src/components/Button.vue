<template>
  <button :type="btnType" class="p-2 text-white rounded" :class="btnStyle" @click.self="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
import {computed} from "vue";

export default {
  name: "Button",
  emits: ['click'],
  props: {
    color: { type: String, default: 'blue' },
    type: { type: String, default: 'button' },
  },
  setup(props) {
    const btnStyle = computed(() => {
      return `bg-${props.color}-500 hover:bg-${props.color}-600 active:bg-${props.color}-800`;
    });

    const btnType = props.type;

    return { btnStyle, btnType }
  }
}
</script>

<style scoped>

</style>
