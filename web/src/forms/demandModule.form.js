import React, {useState, useCallback, useEffect} from 'react';
import {Form, Col, Row, Button, Divider, Spin} from 'antd';
import {
  demandModuleFormFields,
  demandModuleFlowFormFields,
  demandModuleFlowFormCalFields,
} from 'common/formFields/demandModule.formFields';
import {useAPI} from 'common/hooks/api';
import {useHandleForm} from 'hooks/form';
import {createMr, editMr, retrieveMr} from 'common/api/auth';
import {PlusOutlined, CloseOutlined} from '@ant-design/icons';
import {useControlledSelect} from '../hooks/useControlledSelect';
import formItem from '../hocs/formItem.hoc';

import DmCalModal from './demandModuleCalModal.form';

import _ from 'lodash';
import {filterActive} from 'common/helpers/mrHelper';

export const DemandModuleForm = ({id, onCancel, onDone}) => {
  const {data: flows} = useAPI('/myflows/', {});
  const [flowId, setFlowId] = useState(null);

  const [kits, setKits] = useState([]);

  useEffect(() => {
    if (flowId) {
      const f = _.find(flows, (o) => o.id === flowId);
      const ks = f.kits.map((el) => el.kit);
      setKits(ks);
    }
  }, [flowId]);

  const {form, submit, loading} = useHandleForm({
    create: createMr,
    edit: editMr,
    retrieve: retrieveMr,
    success: 'Demand created/edited successfully.',
    failure: 'Error in creating/editing Demand.',
    done: onDone,
    close: onCancel,
    id,
    dates: ['delivery_required_on'],
  });

  const [kitQuantities, setKitQuantities] = useState({});

  const preProcess = (data) => {
    const {flows} = data;
    const newFlows = flows.map((flo) => ({
      flow: Number(flo.flow),
      kit: Number(flo.kit),
    }));
    data.flows = newFlows;
    console.log(data);
    submit(data);
  };

  const handleFieldsChange = useCallback(
    (data) => {
      if (data[0]) {
        if (data[0].name) {
          const currentSelected = data[0].name[0];
          if (currentSelected === 'flows') {
            form.setFieldsValue({
              flows: form.getFieldValue(currentSelected).map((v) => {
                if (v) {
                  if ('flow' in v && 'kit' in v) {
                    console.log(v);
                    const thisKit = _.find(kits, (o) => o.id === v.kit);
                    const thisFlow = _.find(flows, (o) => o.id === v.flow);
                    if (thisKit && thisFlow) {
                      return {
                        ...v,
                        part_number: thisKit.part_number,
                        receiver_client_name: thisFlow.receiver_client.name,
                        receiver_client_city: thisFlow.receiver_client.city,
                        flow_days: thisFlow.flow_days,
                        kit_type: thisKit.kit_type,
                        kit_id: thisKit.kit_name,
                        components_per_kit: thisKit.components_per_kit,
                      };
                    } else {
                      return {
                        ...v,
                        kit: null,
                        part_name: '',
                        part_number: '',
                        receiver_client_name: '',
                        receiver_client_city: '',
                        flow_days: '',
                        kit_type: '',
                        kit_id: '',
                        components_per_kit: '',
                      };
                    }
                  }
                  return v;
                }
              }),
            });
          }
        }
      }
    },
    [kits, flows, form],
  );

  return (
    <Spin spinning={loading}>
      <Divider orientation="left">Demand Module Details</Divider>
      <Form
        onFinish={preProcess}
        form={form}
        layout="vertical"
        hideRequiredMark
        autoComplete="off"
        onFieldsChange={handleFieldsChange}>
        <Row style={{justifyContent: 'left'}}>
          {demandModuleFormFields.slice(0, 1).map((item, idx) => (
            <Col span={24}>
              <div key={idx} className="p-2">
                {formItem(item)}
              </div>
            </Col>
          ))}
        </Row>

        <Divider orientation="left">Flow and Kit Details</Divider>

        <Form.List name="flows">
          {(fields, {add, remove}) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Row align="middle">
                    {demandModuleFlowFormFields.slice(0, 1).map((item) => (
                      <Col span={item.col_span}>
                        <div className="p-2">
                          {formItem({
                            ...item,
                            noLabel: index != 0,
                            kwargs: {
                              onChange: (val) => {
                                setFlowId(val);
                              },
                              placeholder: 'Select',
                              showSearch: true,
                              filterOption: (input, option) =>
                                option.search.toLowerCase().indexOf(input.toLowerCase()) >= 0,
                            },
                            others: {
                              selectOptions: filterActive(_, flows) || [],
                              key: 'id',
                              dataKeys: ['flow_name', 'flow_info', 'flow_type'],
                              customTitle: 'flow_name',
                              formOptions: {
                                ...field,
                                name: [field.name, item.key],
                                fieldKey: [field.fieldKey, item.key],
                              },
                            },
                          })}
                        </div>
                      </Col>
                    ))}
                    {demandModuleFlowFormFields.slice(1, 2).map((item) => (
                      <Col span={item.col_span}>
                        <div className="p-2">
                          {formItem({
                            ...item,
                            noLabel: index != 0,
                            kwargs: {
                              placeholder: 'Select',
                              showSearch: true,
                              filterOption: (input, option) =>
                                option.search.toLowerCase().indexOf(input.toLowerCase()) >= 0,
                              onFocus: () => {
                                const data = form.getFieldValue(['flows', field.name, 'flow']);
                                if (data) {
                                  console.log(data);
                                  setFlowId(data);
                                }
                              },
                            },
                            others: {
                              selectOptions: filterActive(_, kits) || [],
                              key: 'id',
                              customTitle: 'part_name',
                              //dataKeys: ['kit_name', 'kit_info', 'components_per_kit'],
                              formOptions: {
                                ...field,
                                name: [field.name, item.key],
                                fieldKey: [field.fieldKey, item.key],
                              },
                            },
                          })}
                        </div>
                      </Col>
                    ))}
                    {demandModuleFlowFormFields.slice(2).map((item) => (
                      <Col span={item.col_span}>
                        <div className="p-2">
                          {formItem({
                            ...item,
                            noLabel: index != 0,
                            others: {
                              formOptions: {
                                ...field,
                                name: [field.name, item.key],
                                fieldKey: [field.fieldKey, item.key],
                              },
                            },
                          })}
                        </div>
                      </Col>
                    ))}
                    <Col span={1}>
                      <DmCalModal
                        field={field}
                        kitQuantities={kitQuantities}
                        setKitQuantities={setKitQuantities}
                      />
                    </Col>
                    <Col span={1}>
                      <Button
                        type="danger"
                        title="Delete"
                        onClick={() => {
                          remove(field.name);
                        }}>
                        <CloseOutlined />
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    block>
                    <PlusOutlined /> Add Item
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
        <Row>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <div className="p-2" />
          <Button type="primary" onClick={onCancel}>
            Cancel
          </Button>
        </Row>
      </Form>
    </Spin>
  );
};
