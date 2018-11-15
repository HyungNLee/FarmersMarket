import React, { Component } from 'react';
import Day from './Day';

function DayList(props) {
  return (
    <div className='day-list'>
      <style jsx>{`
        .day-list {
          border: 1px solid black;
        }
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

export default DayList;