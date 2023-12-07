import LoginPage from '@renderer/pages/noAuth/login.vue'
import forgetPassword from '@renderer/pages/noAuth/forgetPassword.vue'
import registerPage from '@renderer/pages/noAuth/register.vue'
export default [
  {
    path: '/',
    name: '登录',
    component: LoginPage
  },
  {
    path: '/forgetPassword',
    name: '忘记密码',
    component: forgetPassword
  },
  {
    path: '/register',
    name: '注册',
    component: registerPage
  }
]
