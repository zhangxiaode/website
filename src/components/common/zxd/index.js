import Vue from 'vue'
import Message from "./packages/message/index"
const install = function(Vue, opts = {}) {
  Vue.prototype.$message = Message;
};
/* istanbul ignore if */
install(Vue);
export default {
  install,
  Message
} 