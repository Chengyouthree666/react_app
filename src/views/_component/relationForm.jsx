import React from 'react';
import { Form } from '@formily/antd';
import { SchemaField, formInstance, jsonShemaConfig } from './config';

const RelationForm = () => {
  console.log();
  return (
    <Form
      form={formInstance}
      labelCol={5}
      wrapperCol={16}
    >
      <SchemaField schema={jsonShemaConfig} />
    </Form>
  );
};

export default RelationForm;
