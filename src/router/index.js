import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import SignUp from '@/pages/signUp/SignUp'
import List from '@/pages/list/List'
import Detail from '@/pages/detail/Detail'
import UserHome from '@/pages/userHome/UserHome'
import UserInfo from '@/pages/userInfo/UserInfo'
import UserSearch from '@/pages/userSearch/UserSearch'
import AdminHome from '@/pages/adminHome/AdminHome'
import AddBooks from '@/pages/addBooks/AddBooks'
import AdminInfo from '@/pages/adminInfo/AdminInfo'
import EditUsers from '@/pages/editUsers/EditUsers'
import EditAdmins from '@/pages/editAdmins/EditAdmins'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  }, {
    path: '/list',
    name: 'List',
    component: List
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }, {
    path: '/userHome',
    name: 'UserHome',
    component: UserHome
  }, {
    path: '/userInfo',
    name: 'UserInfo',
    component: UserInfo
  }, {
    path: '/userSearch',
    name: 'UserSearch',
    component: UserSearch
  }, {
    path: '/adminHome',
    name: 'AdminHome',
    component: AdminHome
  }, {
    path: '/addBooks',
    name: 'AddBooks',
    component: AddBooks
  }, {
    path: '/adminInfo',
    name: 'AdminInfo',
    component: AdminInfo
  }, {
    path: '/editUsers',
    name: 'EditUsers',
    component: EditUsers
  }, {
    path: '/editAdmins',
    name: 'EditAdmins',
    component: EditAdmins
  }]
})
