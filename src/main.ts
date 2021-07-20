import { createApp } from 'vue';
import { Menu, Table, Tag } from 'ant-design-vue';
import App from './App.vue';
import router from './routes/index';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

const antdComs = [Menu, Table, Tag];
antdComs.forEach((item) => app.use(item));

app.use(router);
app.mount('#app');
