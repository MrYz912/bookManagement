import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import {
  Form,
  FormItem,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Input,
  Dialog,
  Select,
  Option,
  Container,
  Menu,
  Header,
  Main,
  Aside,
  Card,
  MenuItem,
  Radio
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Card)
Vue.use(MenuItem)
Vue.use(Radio)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
