import React, { Component } from 'react';

function ProduceItem(props) {
  return (
    <div className='produce-item'>
      <style jsx>{`
        .produce-item {
          border: 1px solid black;
        }
    `}</style>
      <ul>
        <li>{props.month}</li>
        <ul>
          {props.selection.map((produce, index) =>
            <li key={index}>{produce}</li>
          )}
        </ul>
      </ul>
    </div>
  );
}

export default ProduceItem;