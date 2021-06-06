import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '/src/components/home/Index'
import PopupBluda from '/src/components/popupbluda/Index'
import PopupCombo from '/src/components/popupcombo/Index'
import Events from '/src/components/events/Index'
import Main from '/src/components/main/Index'
import ComboNabori from '/src/components/combonabori/Index'
import PageWithCategory from '/src/components/pagewithcategory/Index'
import Search from '/src/components/poisk/Index'
import ViborRest from '/src/components/viborrestorana/Index'
import VkhodOldCode from '/src/components/vkhodoldcode/Index'
import VkhodNewCode from '/src/components/vkhodnewcode/Index'
import LkMobDannie from '/src/components/lkmobdannie/Index'
import LkMobDannie1 from '/src/components/lkmobdannie1/Index'
import LkMobDannie2 from '/src/components/lkmobdannie2/Index'
import InfoCompany from '/src/components/infocompany/Index'
import InfoUsage from '/src/components/infousage/Index'
import Contacts from '/src/components/contacts/Index'
import Card from '/src/components/card/Index'
import CardMob from '/src/components/cardmob/Index'
import OffZak from '/src/components/oformzakaza/Index'
import OffZak1 from '/src/components/oformzakaza1/Index'
import PopUpTime from '/src/components/popuptime/Index'
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
    {path: '/events', component: Events},
    {path: '/main', component: Main},
    {path: '/search', component: Search},
    {path: '/viborrest', component: ViborRest},
    {path: '/vkhodoldcode', component: VkhodOldCode},
    {path: '/vkhodnewcode', component: VkhodNewCode},
    {path: '/lkmobdannie', component: LkMobDannie},
    {path: '/lkmobdannie1', component: LkMobDannie1},
    {path: '/lkmobdannie2', component: LkMobDannie2},
    {path: '/infocompany', component: InfoCompany},
    {path: '/infousage', component: InfoUsage},
    {path: '/contacts', component: Contacts},
    {path: '/card', component: Card},
    {path: '/cardmob', component: CardMob},
    {path: '/oformzakaza', component: OffZak},
    {path: '/oformzakaza1', component: OffZak1},
    {path: '/popuptime', component: PopUpTime},
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
