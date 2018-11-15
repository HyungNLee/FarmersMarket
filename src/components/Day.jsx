import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Day(props) {
  return (
    <div className='day-item'>
      <style jsx>{`
        .day-item {
          border: 1px solid #456533;
          border-radius: 10px;
          background-color: #83bb64;
          margin: 5px;
          color: #fbcdaa;
        }
        .text-container {
          text-align: center;
        }
        .text-container p {
          line-height: 1;
          font-size: 18px;
        }
    `}</style>
      {
        <div className='text-container'>
          <h3>{props.day}</h3>
          <p>{props.location}</p>
          <p>{props.hours}</p>
          <p>{props.booth}</p>
        </div>
      }
    </div>
  );
}
Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Day;