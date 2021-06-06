import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '/src/components/home/Index'
import PopupBluda from '/src/components/popupbluda/Index'
import PopupCombo from '/src/components/popupcombo/Index'
import Events from '/src/components/events/Index'
import Main from '/src/components/main/Index'
import ComboNabori from '/src/components/combonabori/Index'
import PageWithCategory from '/src/components/pagewithcategory/Index'
import Card from '/src/components/card/Index'
import Search from '/src/components/poisk/Index'
import ViborRest from '/src/components/viborrestorana/Index'
import VkhodOldCode from '/src/components/vkhodoldcode/Index'
import VkhodNewCode from '/src/components/vkhodnewcode/Index'
import LkMobDannie from '/src/components/lkmobdannie/Index'
import InfoCompany from '/src/components/infocompany/Index'
import InfoUsage from '/src/components/infousage/Index'
import Contacts from '/src/components/contacts/Index'
import Error from '/src/components/Error404'
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
    {path: '/main', component: Main},
    {path: '/search', component: Search},
    {path: '/viborrest', component: ViborRest},
    {path: '/vkhodoldcode', component: VkhodOldCode},
    {path: '/lkmobdannie', component: VkhodNewCode},
    {path: '/infocompany', component: InfoCompany},
    {path: '/infousage', component: InfoUsage},
    {path: '/LkMobDannie', component: LkMobDannie},
    {path: '/contacts', component: Contacts},
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
