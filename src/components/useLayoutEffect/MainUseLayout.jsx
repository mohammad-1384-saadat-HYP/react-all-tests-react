import React, {useEffect, useLayoutEffect, useState} from 'react';

const MainUseLayout = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("useEffect");
    }, []);

    useLayoutEffect(() => {
        setCounter(prevState => prevState + 1)
        console.log("useLayout");
    }, []);

    console.log("render");

    return (
        <div>
            <p>Counter is: {counter}</p>
        </div>
    );
};

export default MainUseLayout