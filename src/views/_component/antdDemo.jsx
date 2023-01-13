import React, { useState } from 'react';
import {
  Button,
  Drawer,
  Space,
  Text,
} from 'antd';
import RelationForm from './relationForm';

const AntdDemo = () => {
  const [drawerVisible, controlDrawer] = useState(false);

  const drawerController = (state = false) => {
    if (typeof state !== 'boolean') {
      return;
    }
    controlDrawer(state);
  };
  const handleSubmit = () => { };

  return (
    <div className="antd-demo">
      <Space>
      </Space>
      <Button
        onClick={() => drawerController(true)}>
        抽屉
      </Button>
      <Drawer
        title='antd demo'
        width={650}
        visible={drawerVisible}
        closable={false}
        maskClosable={false}
        onClose={() => drawerController(false)}
        footer={
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}>
            <Button
              type="default"
              onClick={() => drawerController(false)}
            >cancel</Button>
            <Button
              type="primary"
              style={{ marginLeft: '10px' }}
              onClick={handleSubmit}
            >submit</Button>
          </div>
        }
      >
        <RelationForm />
      </Drawer>
    </div>
  );
};

export default AntdDemo;
