import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message, Button } from 'antd';

class SubClass extends Component {
  constructor(props) {
    // // 此处不穿props，react会将props赋予实例，因此有无constructor都可访问到this.props
    // // 但不建议省略super中的props，这会引发props在constructor完成前访问undefined的情况，不符合逻辑
    super(props);

    // // 类组件：构造函数中初始化state
    this.state = {
      statusText: '组件初始未加载...',
      // onceUpdate: false
    };

    // // 方法this绑定,render模板中访问this【组件实例】
    this.setStatusText = this.setStatusText.bind(this);
    // this.setOnceUpdate = this.setOnceUpdate.bind(this);
  }

  setStatusText(value = '') {
    this.setState({
      statusText: value
    });
  }
  // setOnceUpdate() {
  //   this.setState({
  //     onceUpdate: true
  //   });
  // }


  // // 在完成constructor后执行（初始化和更新阶段）
  // // return null 将不会更新
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps_props: >>', props);
    return { props, state };
  }

  componentDidMount() {
    // this.setOnceUpdate();
    this.setStatusText('component mounted...');
  }

  // // return a boolean value to control current update task
  // // first mount or using forceUpdate will escape this hook
  shouldComponentUpdate() {
    // // 控制子组件在完成挂在后不再更新
    // return !this.state.onceUpdate;
    return true;
  }

  // //更新前快照
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('【getSnapshotBeforeUpdate】prevProps, prevState: >>', prevProps, prevState);
    return null;
  }

  // // 完成更新
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: >>', prevProps, prevState, snapshot);
    // // 典型用法（不要忘记比较 props）：
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
  }

  componentWillUnmount() {
    message.info('destoryed the SubClass component ');
  }


  render() {
    const { statusText } = this.state;
    const { count, resetCount } = this.props;

    return (
      <div className="sub-class">
        <span
          style={{
            fontSize: `${(14 + count) > 25 ? 25 : (14 + count)}px`
          }}>{statusText}</span>
        <Button onClick={resetCount}>重置父组件的计数器</Button>
      </div>
    );
  }
}

// props类型检查
SubClass.propTypes = {
  count: PropTypes.number,
  resetCount: PropTypes.func
};

export default SubClass;

/**
 *  关于react 类组件的生命周期
 *   // 挂载阶段
 *  1.类组件【constructor】
 *  2. static getDerivedStateFromProps()
 *  3. render()
 *  4. componentDidMount()
 *  // 更新阶段
 *  1. static getDerivedStateFromProps()
 *  2. shouldComponentUpdate()
 *  3. render()
 *  4. getSnapshotBeforeUpdate()  //更新前快照
 *  5. componentDidUpdate() // 完成更新
 *
 *  // 错误拦截
 *  1. static getDerivedStateFromError()
 *  2. componentDidCatch()
 *
 *  // 销毁阶段
 *  componentWillUnmount()
 */

