import React, { useState, useEffect } from 'react';
import { Button, Empty } from 'antd';

import SubClass from './subClassCom';
import ReduxTest from './reduxTest';

const Home = () => {
  let [count, setCount] = useState(0);
  let [grayscale, setGrayscale] = useState(1);
  let [flag, setFlag] = useState(true);


  /**
   * // 关于函数组件模拟生命周期的主要方法： useEffect
   *
   *  // 1. useEffect(() => {}, []) 【第二个数组为空数组，执行函数将在componentDidMount时执行一次】
   *  // 2. useEffect(() => {}, [someValue]) 【对someValue进行监听，初始化以及其改变时都将执行第一个函数】
   *  // 3. useEffect(() => {}) 【不传第二个参数，执行函数将在挂在和更新时都执行】
   */
  // useEffect 【传入函数会在浏览器完成布局绘制后的一个延迟函数中调用，目的使副作用不阻塞浏览器的视觉更新】
  useEffect(() => {
    if (count && count % 2 == 0) {
      setGrayscale(0.6);
    } else {
      setGrayscale(1);
    }
  });

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="home-wrapper">
      <div>
        <h1 style={{ filter: `grayscale(${grayscale})`, color: 'orange', display: 'inline-block' }}>Home</h1>
        <h3 style={{ margin: '0 10px' }}>计数器：{count}</h3>
        <Button type='primary' onClick={() => setCount(count += 1)} style={{ margin: '10px' }}>click +1</Button>
        <Button type='primary' onClick={() => setFlag(!flag)}>销毁/生成 子组件</Button>
        <div style={{ padding: '10px', border: '1px solid #ccc' }}>
          <h3>子组件SubClass</h3>
          {flag && <SubClass count={count} resetCount={resetCount} />}
        </div>
      </div>
      <div>
        {flag && <ReduxTest />}
      </div>
    </div>
  );
};

export default Home;

