import { observer } from "mobx-react";
import { counterStore } from "../commont";

const Counter = observer(() => {
  return (
    <div>
      <h2>Counter Mobx: {counterStore.count}</h2>
    </div>
  );
});
export default Counter;
