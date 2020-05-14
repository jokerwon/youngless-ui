<template>
  <div id="app">
    <yl-button @click="handle">按钮</yl-button>
    <yl-button type="primary"  round>按钮</yl-button>
    <yl-button type="info">按钮</yl-button>
    <yl-button type="success">按钮</yl-button>
    <yl-button type="danger">按钮</yl-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handle(evt) {
      console.log(evt);
    }
  }
}
</script>

<style lang="scss">

</style>
