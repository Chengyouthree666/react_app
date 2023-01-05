import React, { useState, useEffect } from 'react';
import { Button, InputNumber, message } from 'antd';
import { useDispatch } from 'react-redux';
import { resetLogoCircleSpeed, setLogoCircleSpeed } from '@/store/slices/common';
// import { useThrottleFn } from 'ahooks';

const ReduxTest = () => {
  const dispatch = useDispatch();

  const handler = (value, mode) => {
    switch (mode) {
      case 'set':
        dispatch(setLogoCircleSpeed(value));
        break;
      case 'reset':
        dispatch(resetLogoCircleSpeed());
    }
  };

  // // 使用useEffect模拟函数中生命周期【销毁】
  useEffect(() => {
    console.log('useEffect触发....');
    return () => {
      console.log('reduxTest组件销毁了...');
    };
  }, []);

  return (
    <div className="redux-test-com" style={{ marginLeft: '10px' }}>
      <h3>test redux 【控制logo的旋转速度】</h3>
      <InputNumber
        min={0}
        defaultValue={3}
        onChange={(value) => handler(value, 'set')}
        style={{ marginRight: '10px' }}
      ></InputNumber>
      <Button
        type="primary"
        onClick={(value) => handler(value, 'reset')}
      >重置logo旋转速度</Button>
    </div>
  );
};

export default ReduxTest;
