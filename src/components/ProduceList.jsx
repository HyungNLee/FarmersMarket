import React, { Component } from 'react';
import ProduceItem from './ProduceItem';

function ProduceList(props) {
  return (
    <div className='produce-list'>
      <style jsx>{`
        .produce-list {
          border: 1px solid black;
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
    `}</style>
      <h1>Produce Schedule</h1>
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

export default ProduceList;