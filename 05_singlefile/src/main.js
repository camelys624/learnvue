import Vue from 'vue';  // node_modules下的vue
import App from './App.vue';

new Vue({
    el: '#app',
    render:c=>c(App)
    // components:{
    //     app:App
    // },
    //  template:'<app/>'
});