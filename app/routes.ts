import { get, route } from 'remix/routes'

export const routes = route({
  assets: get('/assets/*path'),
  home: '/',
  login: '/login',
  register: '/register',
  article: '/article/:slug',
  // tag: '/tag/:tag',
  // profile: '/profile/:userName',
  settings: '/settings',
  zzRemixDefaultScaffoldPage: '/default-home',
})
