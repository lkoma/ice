import Vue from 'vue';
import app from './App.vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import router from './router/index';
import './assets/css/main.styl';

Vue.use(Mint);
export default function () {
    new Vue({
        router,
        el: 'app',
        components: {
        app
        }
    });
}