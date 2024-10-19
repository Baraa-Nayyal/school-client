import { NavRoute } from '@/@layouts/types'

export const navigation: NavRoute[] = [
  {
    title: 'الصفوف والشعب',
    to: '/classes',
    icon: 'ri-home-smile-line',
    component: () => import('@/pages/divisions/divisions.vue'),
  },
  {
    title: 'الطلاب والعائلات',
    to: '/students',
    icon: 'ri-home-smile-line',
    component: () => import('@/pages/students/students.vue'),
  },
  {
    title: 'الأقساط',
    to: '/invoices',
    icon: 'ri-home-smile-line',
    component: () => import('@/pages/invoices/invoices.vue'),
  },
  {
    title: 'السائقين',
    to: '/drivers',
    icon: 'ri-home-smile-line',
    component: () => import('@/pages/drivers/drivers.vue'),
  },
]
