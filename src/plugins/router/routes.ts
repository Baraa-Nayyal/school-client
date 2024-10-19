import { NavRoute } from '@/@layouts/types'
import { navigation } from '@/navigation/vertical'
import { RouteRecordRaw } from 'vue-router'

const generateRoutes = (navItems: NavRoute[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  const addRoute = (item: NavRoute) => {
    if (item.to && item.component) {
      routes.push({
        path: item.to as string,
        component: item.component,
      })
    }
    if (item.children) {
      item.children.forEach(addRoute)
    }
  }

  navItems.forEach(addRoute)
  return routes
}

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/students' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      ...generateRoutes(navigation),
      {
        path: 'students/:id',
        component: () => import('@/pages/students/[id].vue'),
      },
      {
        path: 'invoices/:id',
        component: () => import('@/pages/invoices/[id].vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
      {
        path: '/login',
        component: () => import('@/pages/login.vue'),
      },
    ],
  },
]

export { routes }
