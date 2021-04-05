import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import CustomerList from './views/customer/customerList.vue'
import EmployeeList from './views/employee/employee.vue'
import ReportList from './views/reporter/report.vue'

Vue.config.productionTip = false

//1. Định nghĩa các path:
const routes = [
  { path: '/customer', component: CustomerList },
  { path: '/employee', component: EmployeeList },
  { path: '/report', component: ReportList }
]
//2. Khởi tạo router:
const router = new VueRouter({
  routes // short for `routes: routes`
})

//3. Khai báo sử dụng Vue-Router:
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
