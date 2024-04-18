// Counter.js
import React from 'react';
import { useSelector } from 'react-redux';

const CounterToolkit = () => {
  const count = useSelector(state => state.counter.count);

  return (
    <div>
      <h2>Counter redux tollkit: {count}</h2>
     
    </div>
  );
};

export default CounterToolkit;
