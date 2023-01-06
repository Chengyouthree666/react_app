import React, { } from 'react';
import { createForm } from '@formily/core';
import {
  FormProvider,
  FormConsumer,
  Field,
} from '@formily/react';
import {
  FormItem,
  FormLayout,
  Input,
  NumberPicker,
  FormButtonGroup,
  Submit,
} from '@formily/antd';

// 创建表单实例
const basicForm = createForm();

const BasicForm = () => (<FormProvider form={basicForm}>
  <FormLayout layout='vertical'>
    <Field
      name='input'
      title='输入框'
      required
      initialValue="hello formily"
      decorator={[FormItem]}
      component={[Input]}
    />
    <Field
      name='inputNumber'
      title='计数器'
      required
      initialValue={100}
      decorator={[FormItem]}
      component={[NumberPicker, {
        placeholder: 'Please enter',
        style: {
          width: 100,
        },
      },]}
    />
  </FormLayout>
  <FormConsumer>
    {() => (
      <div
        style={{
          margin: '20px 0',
        }}
      >
        输入框响应值：{basicForm.values.input}
      </div>
    )}
  </FormConsumer>
  <FormButtonGroup>
    <Submit onSubmit={() => console.log('【basicForm.values】', basicForm.values)}>提交控制台输入表单值</Submit>
  </FormButtonGroup>
</FormProvider>);

export default BasicForm;
