import Router from 'vue-router'
import Vue from 'vue'

import comA from '../components/comA'
import comB from '../components/comB'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/a',
            name: 'home',
            component: comA
        },
        {
            path: '/b',
            name: 'pageB',
            component: comB
        }
    ]
})