import Home from '~/Pages/Home/Home'
import About from '~/Pages/About/About'
import Cart from '~/Pages/Cart/Cart'
import Admin from '~/Pages/Admin/Admin'
import Login from '~/Pages/Login/Login'
import Register from '~/Pages/Register/Register'

import ContainerOnly from '~/Layouts/ContainerOnly/ContainerOnly'
import Sidebarless from '~/Layouts/Sidebarless/Sidebarless'

const publicPath = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/about',
        element: About,
        layout: Sidebarless,
    },
    {
        path: '/cart',
        element: Cart,
        layout: Sidebarless,
    },
    {
        path: '/login',
        element: Login,
        layout: ContainerOnly,
    },
    {
        path: '/register',
        element: Register,
        layout: ContainerOnly,
    },
]
const privatePath = [
    {
        path: '/admin',
        element: Admin,
        layout: Sidebarless,
    },
]

export { publicPath, privatePath }
