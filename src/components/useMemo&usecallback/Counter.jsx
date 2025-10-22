import React, {useMemo, useState} from 'react';
import Child from "./Child.jsx";

const Counter = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const handle = useMemo(() => function handle() {
    }, []);

    return (
        <div>
            <p>Click Count1: {counter1}</p>
            <p>Click Count2: {counter2}</p>
            <div>
                <button onClick={() => setCounter1(c => c + 1)}>Increment1</button>
                <button onClick={() => setCounter1(c => c - 1)}>Decrease1</button>
            </div>
            <div>
                <button onClick={() => setCounter2(c => c + 1)}>Increment2</button>
                <button onClick={() => setCounter2(c => c - 1)}>Decrease2</button>
            </div>
            <Child handle={handle}/>
        </div>
    );
};

export default Counter