import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'

import './assets/css/main.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TextHighlight from 'vue-text-highlight';

Vue.component('text-highlight', TextHighlight);
library.add(faLongArrowAltLeft, faLongArrowAltRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')