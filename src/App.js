import React from "react";
import "./App.css";
import { counterStore } from "./commont";
import CounterToolkit from "./redux-toolkit/CounterToolkit";
import Counter from "./MobX/Counter";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux-toolkit/counterSlice";
import useCounterStore from "./Zustand/store";
import CounterZustand from "./Zustand/CounterZustand";

function App() {
  const dispatch = useDispatch();
  const incrementZ = useCounterStore((state) => state.increment);
  const decrementZ = useCounterStore((state) => state.decrement);
  return (
    <div className="App">
      <header>
        mobx
        <div>
          <button onClick={() => counterStore.increment()}>Increment</button>
          <button onClick={() => counterStore.decrement()}>Decrement</button>
        </div>
        <Counter />
        toolkit
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <CounterToolkit />
        Counter Zustand
        <div>
          <button onClick={incrementZ}>Increment</button>
          <button onClick={decrementZ}>Decrement</button>
        </div>
        <CounterZustand />
      </header>
    </div>
  );
}

export default App;
