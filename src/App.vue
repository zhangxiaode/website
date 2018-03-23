<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Transition></Transition>
    <Loading v-if="showLoading"></Loading> 
  </div>
</template>

<script>
import ajax from "@/utils/ajax"
import Loading from "@/components/common/loading"
export default {
  name: 'App',
  data(){
    return {
    }
  },
  computed:{
    showLoading(){
      return this.$store.state.loading
    }
  },
  components:{Loading},
  created(){
    // 测试ajax
    ajax.get('/borrow/ordersInfo/getOrderList',{})
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      // console.log(err);
    })
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
