import React, {useState } from 'react';
import { useAPI } from 'common/hooks/api';
import { Button, Col, Form, Input, Popconfirm, Row } from 'antd';
import formItem from 'hocs/formItem.hoc';
import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';
import { MasterHOC } from 'hocs/Master.hoc';
import { createTestInv, deleteTestInv, retrieveTestInv } from 'common/api/auth';
import { loadAPI } from 'common/helpers/api';
import { TestInventoryDetailColumn } from 'common/columns/testInventoryDetail.column';
import { useHandleForm } from '../../hooks/form';
import { deleteHOC } from '../../hocs/deleteHoc';
import Delete from '../../icons/Delete';
import { useTableSearch } from '../../hooks/useTableSearch';

const { Search } = Input;

export const TestInventoryScreen = () => {
  const { data: products  } = useAPI('/products/', {});
  const [details,setDetails] = useState([]);
  const [detailsLoading,setDetailsLoading] = useState(false);
  const [selectedProduct,setSelectedProduct] = useState('');
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData:invData, loading:invLoading, reload } = useTableSearch({
    searchVal,
    retrieve: retrieveTestInv,
  });

  const { form, submit, loading } = useHandleForm({
    create: createTestInv,
    success: 'Inventory created/edited successfully.',
    failure: 'Error in creating/editing Inventory.',
    done: () => {
      reload();
    },
    close: () => null,
  });



  const column  = [
    {
      title:'Product',
      key:'product',
      dataIndex:'product',
      render:(product)=><div>{product.short_code}</div>
    },
    {
      title:'Quantity',
      key:'quantity',
      dataIndex:'quantity'
    },
    {
      title: 'Action',
      key: 'operation',
      width: '9vw',
      render: (text, record) => (
        <div className='row justify-evenly'>
          <Button
            type='primary'
            onClick={async (e) => {
              setSelectedProduct(record.product.short_code);
              setDetailsLoading(true)
              const { data } = await
              loadAPI(`/ledger-items/?id=${record.product.id}`,{ method:'GET' });
              setDetails(data);
              setDetailsLoading(false)
              e.stopPropagation()}}>
            Details
          </Button>
          <Popconfirm
            title='Confirm Delete'
            onCancel={(e) => e.stopPropagation()}
            onConfirm={deleteHOC({
              record,
              reload,
              api: deleteTestInv,
              success: 'Deleted Inventory Successfully',
              failure: 'Error in deleting Inventory',
            })}>
            <Button
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none',
                padding: '1px',
              }}
              onClick={(e) => e.stopPropagation()}>
              <Delete />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  const columnDetails = [
    {
      title:'Product',
      key:'product',
      dataIndex:'product',
      render:(product)=>(<div>{product.product}</div>)
    },
    {
      title:'Date',
      key:'date',
      dataIndex:'date',
      render:(date)=><div>{date.slice(0,11)}</div>
    }, ...TestInventoryDetailColumn ]
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: '15vw', display: 'flex', alignItems: 'flex-end' }}>
          <Search onChange={(e) => setSearchVal(e.target.value)} placeholder='Search' enterButton />
        </div>
      </div>
      <Form
        onFinish={submit}
        form={form}
        layout='vertical'
        hideRequiredMark
        autoComplete='off'>
        <Row align='middle' gutter={32}>
          <Col span={8}>
            {formItem({
              key: 'product',
              kwargs: {
                placeholder: 'Select',
                showSearch: true,
                filterOption: (input, option) =>
                  option.search.toLowerCase().indexOf(input.toLowerCase()) >= 0,
              },
              others: {
                selectOptions: products || [],
                key: 'id',
                dataKeys: ['name', 'description', 'category'],
                customTitle: 'short_code',
              },
              type: FORM_ELEMENT_TYPES.SELECT,
              customLabel: 'Product',
            })}
          </Col>
          <Col span={8}>
            {formItem({
              key: 'quantity',
              kwargs: {
                placeholder: 'Quantity',
              },
              type: FORM_ELEMENT_TYPES.INPUT,
              customLabel: 'Quantity',
            })}
          </Col>
          <Col span={4}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

      <Row gutter={32}>
        <Col span={12}>
          <MasterHOC
            refresh={reload}
            size='small'
            data={invData}
            columns={column}
            title='Inventory'
            hideRightButton
            loading={loading || invLoading}
            />
        </Col>
        <Col span={12}>
          <MasterHOC
            size='small'
            data={details}
            title={`${selectedProduct} Details`}
            hideRightButton
            loading={detailsLoading}
            columns={columnDetails} />
        </Col>
      </Row>
    </div>
  );
};
export default TestInventoryScreen;
