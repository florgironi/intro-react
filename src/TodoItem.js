import React from 'react';
import './TodoItem.css'

function TodoItem(props){
    return(
       <li className='container-list'>
       <input type="checkbox"
        onChange={props.onComplete}
       />
       <p>{props.text}</p>
        <span className='icon-delete'
        onClick={props.onDelete}
        >✖️</span>
       </li>
    );
}
export { TodoItem };