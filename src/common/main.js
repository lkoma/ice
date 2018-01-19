import Vue from 'vue';
import App from './App';
import Muse from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-teal.css';
import './assets/css/main';
import router from './router';

Vue.use(Muse);

new Vue({
    el: '#app',
    render: h => h(App),
    components: { App },
    router
});
