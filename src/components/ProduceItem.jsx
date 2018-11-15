import React, { Component } from 'react';
import ProduceItemDisplay from './ProduceItemDisplay';
import PropTypes from 'prop-types';

function ProduceItem(props) {
  return (
    <div className='produce-item'>
      <style jsx>{`
        .produce-item {
          border: 1px solid #aaa68b;
          margin: 3px;
          border-radius: 5px;
          background-color: #e5e2cc;
        }
        .produce-wrapper {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          width: 100%;
          padding: 2px;
        }
        h3 {
          text-align: center;
          margin: 10px;
          color: #456533;
        }
    `}</style>
      <h3>{props.month}</h3>
      <div className='produce-wrapper'>
        {props.selection.map((produce, index) =>
          <ProduceItemDisplay produce={produce}
            key={index} />
        )}
      </div>
    </div>
  );
}

ProduceItem.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default ProduceItem;