import React, { Component } from 'react';
import Day from './Day';
import PropTypes from 'prop-types';

function DayList(props) {
  return (
    <div className='day-list'>
      <style jsx>{`
        .day-item { 
          display: grid;
          grid-template-columns: repeat(3,1fr);
          width: 100%;
        }
    `}</style>
      <div className='day-item'>
        {props.marketSchedule.map((day, index) =>
          <Day day={day.day}
            location={day.location}
            hours={day.hours}
            booth={day.booth}
            key={index} />
        )}
      </div>
    </div>
  );
}

DayList.propTypes = {
  marketSchedule: PropTypes.array.isRequired
};

export default DayList;