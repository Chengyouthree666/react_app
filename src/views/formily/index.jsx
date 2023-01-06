import React, { Component } from 'react';
import BasicForm from './basic';
import JsonForm from './jsonSchemaForm';

const centerStyle = { textAlign: 'center' };
const formStyle = {
  width: '800px',
  margin: '0 auto',
  padding: '10px',
  border: '2px dashed #ddd',
  marginBottom: '10px'
};
export default function Formily() {
  return (
    <div className='formily-wrap'>
      <h3 style={centerStyle}>formily.js for better form</h3>
      <div className="demo-container">
        <div className="basic-form" style={formStyle}>
          <h3 style={centerStyle}>基本表单</h3>
          <BasicForm />
        </div>
        <div className="jsonschema-form" style={formStyle}>
          <h3 style={centerStyle}>jsonschema 模式</h3>
          <JsonForm />
        </div>
        <div className="interaction-form" style={formStyle}>
          <h3 style={centerStyle}>联动表单</h3>
        </div>
      </div>
    </div>
  );
}
