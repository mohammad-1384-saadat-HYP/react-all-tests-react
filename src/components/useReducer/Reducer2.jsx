import React, {useReducer, useState} from 'react';
import Todo from "./Todo.jsx";
import {ACTIONS} from "./Actions.js";

const reducer = (todos, action) => {
    const payload = action.payload;
    switch (action.type) {
        case ACTIONS.ADD:
            return [...todos, {id: new Date(), name: payload.name, complete: false}]
        case ACTIONS.TOGGLE:
            return todos.map(todo => {
                if (todo.id === payload.id) {
                    return {...todo, complete: !todo.complete}
                } else {
                    return todo
                }
            })
        case ACTIONS.DELETE:
            return todos.filter(todo => (todo.id !== payload.id));
        default:
            return todos
    }
}

const Reducer2 = () => {
    const [name, setName] = useState("");
    const [todos, dispatch] = useReducer(reducer, []);

    const handleName = e => setName(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD, payload: {name: name}});
        setName("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleName}/>
                <button type="submit">add</button>
            </form>
            {todos.map(todo => (<Todo key={todo.id} todo={todo} dispatch={dispatch}/>))}
        </div>
    );
};

export default Reducer2