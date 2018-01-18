import Vue from 'vue';
import App from './App';
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css';
import router from './router';

// Vue.use(Mint);

new Vue({
    el: '#app',
    render: h => h(App),
    components: { App },
    router
});
