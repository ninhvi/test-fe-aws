// Counter.js
import React from 'react';
import useCounterStore from './store';

const CounterZustand = () => {
  const count = useCounterStore(state => state.count);
  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default CounterZustand;
