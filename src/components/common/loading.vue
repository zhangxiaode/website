<template>
  <div class="loading">
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.loading{
    position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999;
    background:url(../../assets/loading.gif) no-repeat center center;
}
</style>
