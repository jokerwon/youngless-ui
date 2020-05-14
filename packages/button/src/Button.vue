<template>
  <button
    @click="handleClick"
    class="yl-button"
    :class="[`yl-button--${type}`, { 'is-plain': plain, 'is-round': round }]"
  >
    <span v-if="$slot.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "YlButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
};
</script>
