import React from 'react';
import './TodoItem.css'

function TodoItem(props){
    return(
       <li className='container-list'>
       <input type="checkbox"/>
       <p>{props.text}</p>
        <span className='icon-delete'>✖️</span>
       </li>
    );
}
export { TodoItem };