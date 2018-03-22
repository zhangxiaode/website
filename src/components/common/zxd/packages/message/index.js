import Vue from 'vue'
let MessageConstructor = Vue.extend(require("./message.vue"));
let instance;
var Message = function(options){
  instance=new MessageConstructor({data: options});
  console.log(instance);
  // instance.vm=instance.$mount();
  // document.body.appendChild(instance.vm.$el);
  // instance.vm.visible = true;
  // instance.dom = instance.vm.$el;
  console.log(options);
  return instance.vm;
};
['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});
export default Message