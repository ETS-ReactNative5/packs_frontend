import React, {useEffect, useState} from 'react';
import {getBarcodes} from 'common/api/auth';
import {useParams} from '@reach/router';
import './PrintBarcodes.css';

const PrintBarcodes = () => {
  const {id} = useParams();
  const [barcodes, setBarcodes] = useState(null);
  useEffect(() => {
    getBarcodes({pk: id}).then((response) => {
      setBarcodes(response.error);
      console.log('response is', response);
    });
  }, []);

  const renderBarcodeGrid = (singlePageData) => {
    console.log('singlePage data is ', singlePageData);
    if (singlePageData !== undefined) {
      return singlePageData.map((b, index) => {
        return (
          <div class="grid-row" key={index}>
            <div class="grid-col">
              <span style={{textAlign: 'center'}}>
                <br />
                Yantraksh Logistics Pvt Ltd
                <br />
                <div class="box">
                  <img src={`data:image/png;base64,${b.image}`} alt="" srcset="" />
                </div>
                {b.label} <br />
                {b.lname ? b.lname : '_____'}
              </span>
            </div>
            <div class="grid-col">
              <span style={{textAlign: 'center'}}>
                <br />
                Yantraksh Logistics Pvt Ltd
                <br />
                <div class="box">
                  <img src={`data:image/png;base64,${b.image}`} alt="" srcset="" />
                </div>
                {b.label} <br />
                {b.lname ? b.lname : '_____'}
              </span>
            </div>
          </div>
        );
      });
    }
  };

  const renderBarcodePage = () => {
    if (barcodes !== null) {
      return barcodes.map((b, index) => {
        return (
          <div className="page" key={index}>
            {renderBarcodeGrid(b)}
          </div>
        );
      });
    }
  };

  return <div className="grid-container">{renderBarcodePage()}</div>;
};

export default PrintBarcodes;
