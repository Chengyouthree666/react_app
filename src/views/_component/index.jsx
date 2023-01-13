import React, { } from 'react';
import { DEFAULT_ITEMS } from './config';
import Sticky from './sticky';
import AntdDemo from './antdDemo';


function ChildComponent(props) {
  let defaultChildren = null;
  switch (props.name) {
    case 'sticky':
      defaultChildren = <Sticky titleSlot={<b>插槽</b>} />;
      break;
    case 'antd':
      defaultChildren = <AntdDemo />;
      break;
  }
  return defaultChildren;
}


const CustomeComponent = () => {
  console.log();
  return (
    <div className="custome-components" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        DEFAULT_ITEMS.map((item) => (
          <div className="component-item" key={item.name} style={{ marginLeft: '10px' }}>
            <h3 className='colorful-text'>{item.title}</h3>
            <div className="component-content" style={{ maxHeight: '300px', width: '400px', border: '2px solid orange', padding: '10px', overflowY: 'auto' }}>
              {
                // 子组件条件渲染
                <ChildComponent name={item.name} />
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default CustomeComponent;
