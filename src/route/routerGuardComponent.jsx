import React from 'react';
import { defaultRoutes, dynamicRoutes } from './index';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
* TODO: 后台管理spa应用权限
*        token有效性(时效)【 next 或 跳转login 】
*        页面权限检查 【白名单next, 非白名单校验权限有效（无效展示403页面或404, 有效next)】
*        login跳转以及登出 (token有效： 可做出提示，此操作将登出清除缓存数据) 【登出清除后台token,本地缓存以及store重置】
*
*/
export class RouterGuardComponent extends React.Component {
  constructor(props) {
    super(props);
    // spa应用常见路由配置
    this.routes = defaultRoutes.map(
      (item) => item.key === 'layout' ? { ...item, children: [...dynamicRoutes] } : item
    );
    // this.routes = defaultRoutes.concat(dynamicRoutes).filter((i) => i.key != 'layout');
  }

  render() {
    // 获取跳转路径
    const targetPathName = props.location.pathname;
    // TODO: 此处默认值考虑改为404组件
    let resultPathname = '/notFound';
    const { routes, props } = this.props;
    console.log('RouterGuardComponent: >>', routes, props);

    function needCheckAuth() {
      // 省略白名单【一级路由， 进入二级layout后需校验权限】
      return !(defaultRoutes.find((i) => i.path === targetPathName));
    }
    function checkTokenValid() {
      // TODO: 校验token有效性，时效性（可加前台处理）
    }
    function checkAuth() {
      // 此处假设layout所有子路由为动态权限页面
      const targetRoute = dynamicRoutes.find((router) => router.path === targetPathName);
      return targetRoute ? targetRoute.auth : null;
    }

    if (!this.checkTokenValid()) {
      // 无效token
      resultPathname = '/login';
    } else {
      const isWhiteListMember = this.needCheckAuth();

      if (isWhiteListMember) {
        resultPathname = '/login';
      } else {
        // 权限检验
        const res = this.checkAuth();
        if (res === null) {
          // 找不到该路径
          resultPathname = '/notFound';
        } else {
          if (res) {
            // 有权限
            resultPathname = targetPathName;
          } else {
            // 无权限(403页面)
            resultPathname = 'noPermit';
          }
        }
      }
    }

    return <Navigate to={resultPathname}></Navigate>;
  }
}

RouterGuardComponent.PropTypes = {
};
