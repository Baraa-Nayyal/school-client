import { NavRoute } from '@/@layouts/types'

export const navigation: NavRoute[] = [
  {
    title: 'Students',
    to: '/students',
    icon: 'ri-group-line',
    component: () => import('@/pages/students/students.vue'),
  },

  {
    title: 'Classes',
    to: '/classes',
    icon: 'ri-building-2-line',
    component: () => import('@/pages/divisions/divisions.vue'),
  },
  {
    title: 'Invoices',
    to: '/invoices',
    icon: 'ri-cash-line',
    component: () => import('@/pages/invoices/invoices.vue'),
  },
  {
    title: 'Analysis',
    to: '/analysis',
    icon: 'ri-file-chart-line',
    component: () => import('@/pages/analysis/analysis.vue'),
  },
  {
    title: 'Drivers',
    to: '/drivers',
    icon: 'ri-truck-line',
    component: () => import('@/pages/drivers/drivers.vue'),
  },
]
