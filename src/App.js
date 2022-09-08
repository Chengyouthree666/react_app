import React from 'react'
import './App.css';
import Home from './views/home'
import Layout from './views/layout'
import Login from './views/login'
import { Routes, Switch, Route, Link } from 'react-router-dom'

function App () {
  return (
    <div>
      <div className='links'>
        <Link to="/">主页面</Link>
        <Link to="/home">首页</Link>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
