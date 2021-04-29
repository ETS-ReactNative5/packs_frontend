import React, {useState, useEffect} from 'react';
import {Row, Col, Input, Typography, notification, Table, Tag, Button, Spin} from 'antd';
import {loadAPI} from 'common/helpers/api';
import {postAltBarcodes, patchAltBarcodes} from 'common/api/auth';
import {useAPI} from 'common/hooks/api';

const {Title} = Typography;

export const BarcodeAllotmentDocket = ({transaction, allot, setVisible}) => {
  const [editId, setEditId] = useState(null);

  const [barcodes, setBarcodes] = useState([]);
  const [limitsData, setLimitsData] = useState({});
  const [productDetails, setProductDetails] = useState({});

  const {data: fetchedBarcodes, error: altError, loading: altLoading} = useAPI(
    `dispatch-allotment-fetch/?allot=${allot}`,
  );
  const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   console.log(barcodes);
  // }, [barcodes]);

  // useEffect(() => {
  //   console.log(productDetails);
  // }, [productDetails]);

  useEffect(() => {
    if (!altLoading && fetchedBarcodes) {
      setEditId(fetchedBarcodes.id);

      const {bar_details} = fetchedBarcodes;
      const tempA = fetchedBarcodes.barcodes.map((b, idx) => ({
        barcode: b,
        name: bar_details[idx],
      }));
      setBarcodes(tempA);

      const tempB = {};
      bar_details.forEach((bd, idx) => {
        tempB[bd] = (tempB[bd] ? tempB[bd] : 0) + 1;
      });
      setProductDetails(tempB);
    }
  }, [altLoading]);

  useEffect(() => {
    const fetch = async () => {
      if (allot) {
        const {data} = await loadAPI(`dispatch-allotment-validate/?id=${allot}`);
        setLimitsData(data);
      }
    };
    fetch();
  }, [allot]);

  const addItem = async (value) => {
    const filtered = barcodes.filter((i) => i.barcode === (value || inputValue));
    const {data} = await loadAPI(`check-bar/?code=${value || inputValue}`);

    if (filtered.length === 0 && !!data) {
      const shouldAdd =
        limitsData[data.name] >= 1 + (productDetails[data.name] ? productDetails[data.name] : 0);
      if (shouldAdd) {
        setBarcodes([...barcodes, {barcode: value || inputValue, name: data.name}]);
        setProductDetails({
          ...productDetails,
          [data.name]: (productDetails[data.name] ? productDetails[data.name] : 0) + 1,
        });
      } else {
        notification.warning({
          message: `Limit Exceed`,
          description: `Sorry! No More ${data.name} can be added`,
        });
      }
    } else {
      notification.warning({
        message: 'Barcode Already Exist or Invalid',
        description: 'The item you are trying to add is already exist or it is invalid',
      });
    }
    setInputValue('');
  };
  const onChange = async (e) => {
    const {value} = e.target;
    setInputValue(value);
  };
  const getTableArray = () => {
    const newArr = [];
    Object.keys(productDetails).map((key) =>
      newArr.push({
        product: key,
        quantity: productDetails[key],
      }),
    );
    return newArr;
  };

  const tableFields = [
    {
      title: 'Product Name',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];

  const removeItem = (value, name) => {
    if (barcodes.length) {
      setBarcodes([...barcodes.filter((i) => i.barcode !== value)]);
      if (productDetails[name] === 1) {
        delete productDetails[name];
      } else {
        setProductDetails({...productDetails, [name]: productDetails[name] - 1});
      }
    }
  };
  const getReqBarcodeArray = () => {
    return barcodes.map((i) => i.barcode);
  };
  const reqSubmit = async () => {
    if (editId) {
      var {error} = await patchAltBarcodes(
        {
          barcodes: getReqBarcodeArray(),
          transaction,
          allot,
        },
        editId,
      );
    } else {
      var {error} = await postAltBarcodes({
        barcodes: getReqBarcodeArray(),
        transaction,
        allot,
      });
    }

    if (error !== undefined) {
      notification.warning({
        message: 'Unknown Error in Submission.',
      });
    } else {
      notification.success({
        message: 'Successfully Submitted.',
      });
      setVisible(false);
    }
  };

  return (
    <Spin spinning={altLoading}>
      <Row align="middle">
        <Col span={6}>
          <Input
            value={inputValue}
            onChange={onChange}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                addItem();
              }
            }}
            placeholder="Enter Barcode"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={10}>
          <Title level={4}>Barcode Details</Title>
        </Col>
        <Col span={10}>
          <Title level={4}>Product Details</Title>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <div className={barcodes.length > 0 ? 'barcode-tag-container' : null}>
            {barcodes.length > 0
              ? barcodes.map((item, index) => (
                  <Col className="my-1" span={23} key={index.toString()}>
                    <Tag
                      closable
                      onClose={(e) => {
                        e.preventDefault();
                        removeItem(item.barcode, item.name);
                      }}>
                      {item.barcode}
                    </Tag>
                    <text>{item.name}</text>
                  </Col>
                ))
              : null}
          </div>
        </Col>
        <Col span={14} className="row justify-between h-100">
          {Object.keys(productDetails).length > 0 ? (
            <Table bordered size="small" dataSource={getTableArray()} columns={tableFields} />
          ) : null}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            type="primary"
            disabled={Object.keys(productDetails).length === 0}
            onClick={reqSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </Spin>
  );
};
