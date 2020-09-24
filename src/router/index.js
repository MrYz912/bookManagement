import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home/Home')
const Login = () => import('@/pages/login/Login')
const SignUp = () => import('@/pages/login/Login')
const List = () => import('@/pages/list/List')
const UserHome = () => import('@/pages/userHome/UserHome')
const UserInfo = () => import('@/pages/userInfo/UserInfo')
const UserSearch = () => import('@/pages/userSearch/UserSearch')
const AdminHome = () => import('@/pages/adminHome/AdminHome')
const AddBooks = () => import('@/pages/addBooks/AddBooks')
const AdminInfo = () => import('@/pages/adminInfo/AdminInfo')
const EditUsers = () => import('@/pages/editUsers/EditUsers')
const EditAdmins = () => import('@/pages/editAdmins/EditAdmins')
const AddCategory = () => import('@/pages/addCategory/AddCategory')
const BookCategory = () => import('@/pages/bookCategory/BookCategory')

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
  }, {
    path: '/addCategory',
    name: 'AddCategory',
    component: AddCategory
  }, {
    path: '/bookCategory',
    name: 'BookCategory',
    component: BookCategory
  }]
})
