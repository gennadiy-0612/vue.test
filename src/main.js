import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '/src/components/home/Index.vue'
import PopupBluda from '/src/components/popupbluda/Index.vue'
import PopupCombo from '/src/components/popupcombo/Index.vue'
import Events from '/src/components/events/Index.vue'
import Actions from '/src/components/actions/Index.vue'
import ComboNabori from '/src/components/combonabori/Index.vue'
import PageWithCategory from '/src/components/pagewithcategory/Index.vue'
import Card from '/src/components/card/Index.vue'
import Error from '/src/components/Error404.vue'
import "tailwindcss/dist/tailwind.min.css"
import "./index.css"

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    {path: '', component: Home},
    {path: '/', component: Home},
    {path: '/popupbluda', component: PopupBluda},
    {path: '/popupcombo', component: PopupCombo},
    {path: '/combonabori', component: ComboNabori},
    {path: '/pagewithcategory', component: PageWithCategory},
    {path: '/card', component: Card},
    {path: '/events', component: Events},
    {path: '/actions', component: Actions},
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
