/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const smallFunRouter = {
  path: '/smallFunction',
  component: Layout,
  redirect: '/smallFunction/index',
  name: 'Charts',
  meta: {
    title: '小功能',
    icon: 'chart'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/小功能/index.vue'),
      name: 'xuniliebiao',
      meta: { title: 'index', noCache: false }
    },
    {
      path: 'virtualList',
      component: () => import('@/views/小功能/virturalList/index.vue'),
      name: 'xuniliebiao',
      meta: { title: '虚拟列表', noCache: false }
    }
  ]
}

export default smallFunRouter
