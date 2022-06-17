import './bootstrap';
import {createApp} from 'vue'
import router from './router'

import App from './views/App'

const app = createApp(App)

app
    .use(router)
    .mount('#app')