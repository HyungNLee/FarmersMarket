import React, { Component } from 'react';

function Day(props) {
  return (
    <div className='day-item'>
      <style jsx>{`
        .day-item {
          border: 1px solid black;
        }
    `}</style>
      <ul>
        <li>{props.day}</li>
        <ul>
          <li>{props.location}</li>
          <li>{props.hours}</li>
          <li>{props.booth}</li>
        </ul>
      </ul>
    </div>
  );
}

export default Day;