import React from 'react';
import {ACTIONS} from "./Actions.js";
import styles from './Todo.module.css';

const Todo = ({todo, dispatch}) => {
    return (
        <div>
            <span className={todo.complete ? styles.done : styles.not_done}>{todo.name}</span>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE, payload: {id: todo.id}})}>toggle</button>
            <button onClick={() => dispatch({type: ACTIONS.DELETE, payload: {id: todo.id}})}>delete</button>
        </div>
    );
};

export default Todo