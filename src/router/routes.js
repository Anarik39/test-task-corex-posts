const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue')},
      {path: ':id', component: () => import('pages/PostDetail.vue')},
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
    name: 'error'
  }
]

export default routes
