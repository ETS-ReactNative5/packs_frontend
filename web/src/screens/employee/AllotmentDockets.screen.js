import React, { useState, useEffect } from 'react';
import { Col,Row,Modal , Popconfirm, Input, Button } from 'antd'
import { faTruckLoading ,faMoneyCheck } from  '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import allotmentColumns from 'common/columns/Allotment.column';
import { DeliveredForm } from 'forms/delivered.form';
import { AllotmentMainForm } from 'forms/allotmentMain.form';
import { connect } from 'react-redux';
import { useTableSearch } from 'hooks/useTableSearch';
import { deleteAllotment } from 'common/api/auth';
import { loadAPI } from 'common/helpers/api';
import { DEFAULT_BASE_URL } from 'common/constants/enviroment';
import { useAPI } from 'common/hooks/api';
import { Link, useNavigate } from '@reach/router';
import Delete from 'icons/Delete';
import Edit from 'icons/Edit';
import Delivery from 'icons/Delivery';
import Document from 'icons/Document';
import { BarcodeAllotmentDocket } from 'components/barcodeAllotmentDocket';
import { deleteHOC } from '../../hocs/deleteHoc';
import TableWithTabHOC from '../../hocs/TableWithTab.hoc';
import { LineGraph } from '../../components/graphComponent/lineGraph';
import { LineGraph2 } from '../../components/graphComponent/lineGraph2';
import { BarGraph } from '../../components/graphComponent/barGraph';
import { PointGraph } from '../../components/graphComponent/pointGraph';

const { Search } = Input;

const AllotmentDocketsScreen = ({ currentPage }) => {
  const [searchVal, setSearchVal] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [deliveryId, setDeliveryId] = useState(null);
  const [csvData, setCsvData] = useState(null);
  const [reqData, setReqData] = useState([]);
  const [TN, setTN] = useState(null);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const { data: allotments, loading } = useAPI('/allotments-table/', {});

  const { filteredData, reload } = useTableSearch({
    searchVal,
    reqData,
  });

  useEffect(() => {
    if (allotments) {
      const reqD = allotments.map((alt) => ({
        id: alt.id,
        transaction_no: alt.transaction_no,
        parent_name: alt.sales_order.owner,
        dispatch_date: alt.dispatch_date,
        warehouse_name: alt.send_from_warehouse,
        model: alt.model,
        vehicle_number: alt.vehicle_number,
        transport_by: alt.transport_by,
        is_delivered: alt.is_delivered,
      }));
      setReqData(reqD);
    }
  }, [allotments]);

  const columns = [
    {
      title: 'Sr. No.',
      key: 'srno',
      render: (text, record, index) => (currentPage - 1) * 10 + index + 1,
    },
    ...allotmentColumns,
    {
      title: 'Docket',
      key: 'docket',
      render: (text, record) => {
        return (
          <div className='row align-center justify-evenly'>
            <Link
              to='../docket'
              state={{ id: record.id }}
              key={record.id}
              className='mx-2'
              style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faMoneyCheck} onClick={()=>{setVisible(true)}} style={{ fontSize:20 }} />
            </Link>

            <FontAwesomeIcon
              className='mx-2'
              icon={faTruckLoading}
              onClick={()=>{setVisible(true)}}
              style={{ fontSize:20 }} />
          </div>
        );
      },
    },
    {
      title: 'Action',
      key: 'operation',
      width: '9vw',
      render: (text, record) => (
        <div className='row justify-evenly'>
          <a
            href={`${DEFAULT_BASE_URL  }/delivered-docket/?pk=${record.id}`}
            target='_blank'
            rel='noopener noreferrer'>
            <Button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                padding: '1px',
              }}
              // disabled={!record.document}
              onClick={async (e) => {
                const { data: req } = await loadAPI(
                  `${DEFAULT_BASE_URL}/delivered-docket/?pk=${record.id}`,
                  {},
                );
                if (req) if (req.document) navigate(req.document);
                e.stopPropagation();
              }}>
              <Document color={record.document ? '#7CFC00' : null} />
            </Button>
          </a>
          <Button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              padding: '1px',
            }}
            onClick={(e) => {
              setTN(record.transaction_no);
              setDeliveryId(record.id);
              e.stopPropagation();
            }}>
            <Delivery color={record.is_delivered ? '#7CFC00' : null} />
          </Button>
          <Button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              padding: '1px',
            }}
            onClick={(e) => {
              setEditingId(record.id);
              e.stopPropagation();
            }}>
            <Edit />
          </Button>
          <Popconfirm
            title='Confirm Delete'
            onCancel={(e) => e.stopPropagation()}
            onConfirm={deleteHOC({
              record,
              reload,
              api: deleteAllotment,
              success: 'Deleted kit successfully',
              failure: 'Error in deleting kit',
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

  const tabs = [
    {
      name: 'All Allotment Dockets',
      key: 'allAllotmentDockets',
      data: filteredData,
      columns,
      loading,
    },
  ];

  const cancelEditing = () => {
    setEditingId(null);
    setDeliveryId(null);
  };

  const total = 'Total Orders';
  const deliverd = 'Delivered Orders';
  const pending = 'Pending Orders';

  let deliveredCount = 0;
  // eslint-disable-next-line array-callback-return
  reqData.map((alt) => {
    if (alt.is_delivered) deliveredCount += 1;
  });
  const pendingCount = reqData.length - deliveredCount;
  console.log({ deliveredCount, pendingCount });
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: '15vw', display: 'flex', alignItems: 'flex-end' }}>
          <Search onChange={(e) => setSearchVal(e.target.value)} placeholder='Search' enterButton />
        </div>
      </div>
      <Row className='mr-auto ml-auto'>
        <Col>
          <LineGraph {...{ tagName: total, count: reqData.length }} />
        </Col>
        <Col>
          <LineGraph2 {...{ tagName: deliverd, count: deliveredCount }} />
        </Col>
        <Col>
          <BarGraph {...{ tagName: pending, count: pendingCount }} />
        </Col>
        <Col>
          <PointGraph {...{ tagName: total, count: deliveredCount }} />
        </Col>
      </Row>
      <br />
      <Modal
        maskClosable={false}
        visible={visible}
        destroyOnClose
        style={{ minWidth: `80vw` }}
        title='Barcode Menu'
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}>
        <BarcodeAllotmentDocket />
      </Modal>
      <TableWithTabHOC
        rowKey={(record) => record.id}
        refresh={reload}
        tabs={tabs}
        size='middle'
        title='Allotment Dockets'
        modalBody={deliveryId ? DeliveredForm : AllotmentMainForm}
        modalWidth={60}
        editingId={editingId || deliveryId}
        formParams={{ transaction_no: TN }}
        cancelEditing={cancelEditing}
        hideRightButton
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return { currentPage: state.page.currentPage };
};

export default connect(mapStateToProps)(AllotmentDocketsScreen);
