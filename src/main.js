import Vue from 'vue'
import App from './App'
import router from './router/index'

// plugins
import Portal from './plugins/portal';

Vue.use(Portal);

new Vue({
    router,
    render: h => h(App)
}).$mount('#root');
