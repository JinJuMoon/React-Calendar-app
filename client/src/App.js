import React from 'react';
import Calendar from './Calendar/Calendar'
import './App.css';

const calendar = {
  'year': '2019',
  'month': '10',
  'date': '4',
  'day': '금'
}


function App() {
  return (
    <Calendar
      year={calendar.year}
      month={calendar.month}
      date={calendar.date}
      day={calendar.day}
     />
  );
}

export default App;
