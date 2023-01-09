import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useMemo,
} from 'react';
import {
  Button,
  Empty,
  message,
} from 'antd';
import { useThrottleFn } from 'ahooks';

import SubClass from './subClassCom';
import ReduxTest from './reduxTest';

const Home = () => {
  const borderStyle = {
    border: '2px solid orange',
    padding: '10px',
    margin: '0 5px',
  };

  let [count, setCount] = useState(0);
  let [grayscale, setGrayscale] = useState(1);
  let [flag, setFlag] = useState(true);

  let [count_a, setCountA] = useState(0);
  let [count_b, setCountB] = useState(0);


  /**
   * // 关于函数组件模拟生命周期的主要方法： useEffect
   *
   *  // 1. useEffect(() => {}, []) 【第二个数组为空数组，执行函数将在componentDidMount时执行一次】
   *  // 2. useEffect(() => {}, [someValue]) 【对someValue进行监听，初始化以及其改变时都将执行第一个函数】
   *  // 3. useEffect(() => {}) 【不传第二个参数，执行函数将在挂在和更新时都执行】
   */
  // useEffect 【传入函数会在浏览器完成布局绘制后的一个延迟函数中调用，目的使副作用不阻塞浏览器的视觉更新】
  useEffect(() => {
    memorize();
    if (count && count % 2 == 0) {
      setGrayscale(0.6);
      setCountA((prevCount) => prevCount + 1);
    } else {
      setGrayscale(1);
      setCountB((prevCount) => prevCount + 1);
    }
  }, [count]);

  const resetCount = () => {
    setCount(0);
  };

  const {
    run: alertFn, // 触发执行回调函数
    // cancel, // 取消节流
    // flush, // 立即调用回调
  } = useThrottleFn((msg = '') => {
    message.info(msg);
  });

  // useCallback
  const memorize = useCallback(() => {
    alertFn(`useCallback__: count_a: ${count_a}, count_b: ${count_b}`);
  }, [count_a, count_b]);

  // count_a + count_b
  let total = useMemo(() => count_a + count_b, [count_a, count_b]);

  // componentDidMount
  useEffect(() => {
  }, []);

  return (
    <div className="home-wrapper">
      <div style={borderStyle}>
        <h1 style={{
          filter: `grayscale(${grayscale})`,
          color: 'orange',
          display: 'inline-block',
        }}>Home</h1>
        <h3 style={{ margin: '0 10px' }}>
          计数器：{count}
        </h3>
        <Button
          type='primary'
          onClick={() => setCount(count += 1)}
          style={{ margin: '10px' }}
        >click +1</Button>
        <Button
          type='primary'
          onClick={() => setFlag(!flag)}
        >销毁/生成 子组件</Button>
        <div style={{
          padding: '10px',
          border: '1px solid #ccc',
        }}>
          <h3>子组件SubClass</h3>
          {
            flag ? <SubClass
              count={count}
              resetCount={resetCount}
            /> : null}
        </div>
      </div>
      <div style={borderStyle}>
        {flag && <ReduxTest />}
      </div>
      <div style={borderStyle}>
        <h3>a: {count_a} --- b: {count_b}</h3>
        <h3>计算属性【a+b】: {total}</h3>
      </div>
    </div >
  );
};

export default Home;

