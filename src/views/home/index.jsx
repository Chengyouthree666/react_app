import React from 'react'
import logo from '@/assets/svg/logo.svg';

export default function Home () {
  return (
    <div className="home">
      <div className="logo">
        <img src={logo} style={{width: '60px', height: '60px'}} />
      </div>
      <h1>首页</h1>
    </div>
  )
}
