import { useState } from "react";

const CounterBtn = () => {
    const [count, setCount] = useState(0);
    return (
        <> 
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        </>
    )
}

export default CounterBtn