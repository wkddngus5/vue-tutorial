import Vue from 'vue';
import store from './store';
import AppComponent from './components/AppComponent.vue';

new Vue({
  el: '#app',
  store,
  render: h => h(AppComponent)
});
