import React, {useReducer} from 'react';

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                count: state.count + 1
            }
        case ACTIONS.DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

const Component = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
        dispatch({type: ACTIONS.INCREMENT});
    }

    const decrement = () => {
        dispatch({type: ACTIONS.DECREMENT});
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Component