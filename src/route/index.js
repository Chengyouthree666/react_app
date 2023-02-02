import { lazy } from 'react';

function load(path) {
  return lazy(() => import(`../views/${path}`));
}

export const defaultRoutes = [
  { key: 'login', path: '/login', component: load('login') },
  { key: 'layout', path: '/*', component: load('layout')},
  { key: 'notFound', path: '/notFound', component: load('notFound') }
];

export const dynamicRoutes = [
  { key: 'default', path: '/', component: load('home')},
  { key: 'home', path: '/home', component: load('home') },
  { key: 'formily', path: '/formily', component: load('formily') },
  { key: 'proCom', path: '/proCom', component: load('proCom') },
  { key: '_component', path: '/_component', component: load('_component') },
  { key: 'formik', path: '/formik', component: load('formik') },
];
