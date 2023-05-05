import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faEllipsis, faPlus, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {faBell} from "@fortawesome/free-regular-svg-icons"

library.add(faUserSecret,faBell,faPlus,faEllipsis)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
