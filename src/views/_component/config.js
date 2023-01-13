import {
  createForm,
  onFieldChange,
  // onFieldReact,
} from '@formily/core';
import { createSchemaField } from '@formily/react';
import {
  FormItem,
  Input,
  Select,
  ArrayTable,
  Editable,
} from '@formily/antd';

export const DEFAULT_ITEMS = [
  { name: 'sticky', title: 'sticky粘性布局' },
  { name: 'antd', title: 'antd demo' },
];

export const formInstance = createForm({
  effects() {
    onFieldChange('.controller', (field, form) => {
      console.log('field: >>', form);

      // // formInstance和参数form都可  【对于初始联动，如果字段找不到，setFieldState会将更新推入更新队列，直到字段出现再执行操作】
      // // setFieldState(PATH, {...attr})  联动多个字段：PATH='*(path1, path2...pathn)'

      // //
      form.setFieldState('controlled', {value: field.value?.toUpperCase() || ''});
      // // arraytable
      // form.setFieldState('arrTable', {value: [{column1: 'aaa', column2: 'bbb'}, {column1: 'AAA', column2: 'BBB'}]});
      form.setInitialValues({
        arrTable: [{ bbb: 'bbb', ccc: 'ccc'}, {bbb: 'BBB', ccc: 'CCC'}]
      });
    });
  }
});

export const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
    ArrayTable,
    Editable,
  },
});

export const jsonShemaConfig = {
  type: 'object',
  properties: {
    controller: {
      type: 'string',
      title: '控制者',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    controlled: {
      type: 'string',
      title: '被控制者',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    arrTable: {
      type: 'array',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayTable',
      'x-component-props': {
        pagination: { pageSize: 10},
        scroll: { x: '100%' }
      },
      items: {
        type: 'object',
        properties: {
          column1: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              // width: 140,
              title: '序号',
            },
            properties: {
              aaa: {
                type: 'void',
                'x-component': 'ArrayTable.Index',
              }
            }
          },
          column2: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              minWidth: 140,
              title: 'input1',
            },
            properties: {
              bbb: {
                type: 'string',
                'x-component': 'Input',
                'x-decorator': 'Editable',
              }
            }
          },
          column3: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              // width: 140,
              minWidth: 140,
              title: 'input2',
            },
            properties: {
              ccc: {
                type: 'string',
                'x-component': 'Input',
                'x-decorator': 'Editable',
              }
            }
          },
          column4: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Operations',
              dataIndex: 'operations',
              width: 200,
              fixed: 'right',
            },
            properties: {
              item: {
                type: 'void',
                'x-component': 'FormItem',
                properties: {
                  remove: {
                    type: 'void',
                    'x-component': 'ArrayTable.Remove',
                  },
                  moveDown: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveDown',
                  },
                  moveUp: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveUp',
                  },
                },
              },
            },
          }
        }
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'ArrayTable.Addition',
          title: 'Add entry',
        },
      },
    }
  },
};
