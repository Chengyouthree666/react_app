import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
} from 'antd';
import { dynamicRoutes } from '@/route';
import { useSelector } from 'react-redux';
import Logo from '@/assets/svg/logo.svg';
import JumpLoading from '@/components/jumpLoading';


// TODO: 后期放入store中，方便路由与菜单的整合
const menuItems = [
  { key: 'home', name: 'home', path: 'home' },
  { key: 'formily', name: 'formily', path: 'formily' },
  { key: 'login', name: 'login', path: 'login' },
];


export default function AppLayout() {

  // // 获取redux中值
  const logoCircleSpeed = useSelector((state) => state.common.logoCircleSpeed);

  return (
    <div className='layout-box'>
      <div className="layout-header">
        <div className="header-logo">
          <img
            src={Logo}
            alt=""
            className='logo'
            style={{
              animation: `circle ${logoCircleSpeed}s linear infinite`
            }} />
        </div>
        <ul className='menu-list'>
          {
            menuItems.map((item) =>
              <Link
                key={item.key}
                className='menu-item'
                to={item.path}
              >{item.name}</Link>
            )
          }
        </ul>
      </div>
      <div className="layout-main-view">
        <Routes>
          {dynamicRoutes.map((item) =>
            <Route
              key={item.key}
              path={item.path}
              element={
                <Suspense fallback={
                  <JumpLoading />
                }>
                  <item.component />
                </Suspense>
              } />
          )}
        </Routes>
      </div>
    </div>
  );
}
