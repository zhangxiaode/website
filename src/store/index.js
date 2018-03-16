import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    a: 1
  },
  mutations: {
    showLoading(state){
      state.loading=true;
    },
    hideLoading(state){
      state.loading=false;
    },
    add(state){
      state.a++;
    }
  },
  action: {
    reduce(context){
      context.commit("add");
    }
  }
});
