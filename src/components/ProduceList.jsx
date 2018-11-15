import React, { Component } from 'react';
import ProduceItem from './ProduceItem';
import PropTypes from 'prop-types';

function ProduceList(props) {
  return (
    <div className='produce-list'>
      <style jsx>{`
        .produce-list {
          margin-top: 100px;
        }
        .produce-wrapper { 
          display: grid;
          grid-template-columns: repeat(4,1fr);
          width: 100%;
        }
        h1 {
          text-align: center;
          margin: 50px;
        }
        .jumbotron {
          background-color: #456533;
          color: white;
        }
    `}</style>
      <div className='jumbotron'>
        <h1>Produce Schedule</h1>
      </div>
      <div className='produce-wrapper'>
        {props.availableProduce.map((month, index) =>
          <ProduceItem month={month.month}
            selection={month.selection}
            key={index}
          />
        )}
      </div>
    </div>
  );
}

ProduceList.propTypes = {
  availableProduce: PropTypes.array.isRequired
};

export default ProduceList;