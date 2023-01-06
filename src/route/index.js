import { lazy } from 'react';

const load = (path) => lazy(() => import(`../views/${path}`));

// const Home = lazy(import('../views/home'))

// export const dynamicRoutes = [
//   { key: 'default', path: '/', component: load('home') },
//   { key: 'home', path: '/home', component: load('home') },
//   { key: 'formily', path: '/formily', component: load('formily') },
//   { key: 'login', path: '/login', component: load('login') },
// ]
export const defaultRoutes = [
  { key: 'login', path: '/login', component: load('login') },
  { key: 'layout', path: '/*', component: load('layout')},
];

export const dynamicRoutes = [
  { key: 'default', path: '/', component: load('home')},
  { key: 'home', path: '/home', component: load('home') },
  { key: 'formily', path: '/formily', component: load('formily') },
  { key: 'proCom', path: '/proCom', component: load('proCom') },
  // { key: 'login', path: '/login', component: load('login') },
];
