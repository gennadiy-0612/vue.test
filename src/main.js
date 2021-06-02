import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '/src/components/HelloWorld.vue'
import Home from '/src/components/Home.vue'
import Show from '/src/components/Show.vue'
import Profile from '/src/components/Profile.vue'
import PopupBluda from '/src/components/Popupbluda.vue'
import Error from '/src/components/Error404.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    {path: '', component: Home},
    {path: '/', component: Home},
    {path: '/hello', component: Hello},
    {path: '/home', component: Home},
    {path: '/show', component: Show},
    {path: '/profile', component: Profile},
    {path: '/popupbluda', component: PopupBluda},
    {path: '*', component: Error}
]

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes // short for `routes: routes`
})

const app = new Vue({
    router
}).$mount('#app')

export default app
