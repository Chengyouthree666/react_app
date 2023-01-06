import React, { useState, useEffect } from 'react';
import { createForm } from '@formily/core';
import {
  Card,
  Spin,
} from 'antd';
import {
  Form,
  FormItem,
  FormGrid,
  FormLayout,
  Input,
  DatePicker,
  Cascader,
  Select,
  // IDUpload,
  ArrayItems,
  Editable,
} from '@formily/antd';
import { createSchemaField } from '@formily/react';
import { action } from '@formily/reactive';
import { jsonShemaConfig, defaultFormData, formatLocationOptions } from './jsonshema';

// // 创建表单实例
const jsonFormInstance = createForm();
// // 创建schema实例
const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    ArrayItems,
    Editable,
  },
});
// // 地址下拉数据源赋值操作
const setLocationOptions = (data) => {
  jsonFormInstance && jsonFormInstance.setFieldState('address', (state) => {
    state.dataSource = data;
  });
};

// // 组件
const JsonForm = () => {
  // TODO: 常见表单复用【新增、编辑、详情】
  const [formTitle, setFormTitle] = useState('编辑');

  // // loading
  const [loading, setLoading] = useState(true);

  const closeLoading = () => {
    setLoading(false);
  };

  // 获取下拉数据源
  const getLocationOptionData = () => {
    fetch('//unpkg.com/china-location/dist/location.json')
      .then((res) => res.json())
      .then((data) => {
        setLocationOptions(formatLocationOptions(data));
        closeLoading();
      });
  };

  const configFormData = () => {
    // // 模拟常规：mounted时发请求并设置表单初始值
    jsonFormInstance.setInitialValues(defaultFormData);
  };
  const initFormData = () => {
    getLocationOptionData();
    configFormData();
  };

  useEffect(() => {
    // 表单数据初始化
    initFormData();
    return () => {
      // componentWillUnmount....
    };
  }, []);

  return (
    <Card title={formTitle + '用户'}>
      <Spin spinning={loading}>
        <Form
          form={jsonFormInstance}
          labelCol={5}
          wrapperCol={16}
        >
          <SchemaField schema={jsonShemaConfig} />
        </Form>
      </Spin>
    </Card>
  );
};

export default JsonForm;
