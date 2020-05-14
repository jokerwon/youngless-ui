<template>
  <button
    @click="handleClick"
    class="yl-button"
    :class="[`yl-button--${type}`, { 'is-plain': plain, 'is-round': round }]"
  >
    <span>
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
<style lang="scss" scoped>
.yl-button {
  display: inline-block;
  margin: 0;
  padding: 12px 20px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  // color: #1e4377;
  color: #606266;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  // 禁止元素文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background: #ecf5ff;
  }
}
.yl-button--primary {
  background-color: #409eff;
  color: #fff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background-color: #66b1ff;
    color: #fff;
    border-color: #66b1ff;
  }
}
.yl-button--primary.is-plain {
  background-color: #ecf5ff;
  color: #a2a8ad;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background-color: #66b1ff;
    color: #fff;
    border-color: #66b1ff;
  }
}
.yl-button--primary.is-round {
  padding: 12px 23px;
  border-radius: 20px;
}
</style>
