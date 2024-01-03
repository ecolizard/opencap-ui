import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './components/Locales'
import App from './App.vue';
import router from './router'; // Import the router file

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  //el: '#app',
  router, // Add the router instance to the Vue instance
  render: h => h(App),
  i18n
}).$mount('#app')
