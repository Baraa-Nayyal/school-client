import { NavRoute } from '@/@layouts/types'

export const navigation: NavRoute[] = [
  {
    title: 'Students',
    to: '/students',
    icon: 'ri-home-smile-line',
    component: () => import('@/pages/students/students.vue'),
  },

  {
    title: 'Classes',
    to: '/classes',
    icon: 'ri-home-smile-line',
    component: () => import('@/pages/divisions/divisions.vue'),
  },
  {
    title: 'Invoices',
    to: '/invoices',
    icon: 'ri-home-smile-line',
    component: () => import('@/pages/invoices/invoices.vue'),
  },
  {
    title: 'Analysis',
    to: '/analysis',
    icon: 'ri-home-smile-line',
    component: () => import('@/pages/analysis/analysis.vue'),
  },
  {
    title: 'Drivers',
    to: '/drivers',
    icon: 'ri-home-smile-line',
    component: () => import('@/pages/drivers/drivers.vue'),
  },
]
