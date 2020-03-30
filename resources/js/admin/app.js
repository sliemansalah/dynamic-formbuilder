import Vue from 'vue'
import router from './router'
import './components'
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
Vue.use(VueGoodTablePlugin);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale });

import {i18n} from './i18n/i18n';


Vue.config.productionTip = false
import './datatable';
new Vue({
  i18n,
  el: '#app',
  router,
})