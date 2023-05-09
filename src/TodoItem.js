import React from 'react';
import './TodoItem.css'

function TodoItem(props){
    const onComplete =() =>{
        alert(' Ya completaste ' + props.text)
    }
    const onDelete =() =>{
        alert(' Borraste ' + props.text)
    }
    return(
       <li className='container-list'>
       <input type="checkbox"
        onChange={onComplete}
       />
       <p>{props.text}</p>
        <span className='icon-delete'
        onClick={onDelete}
        >✖️</span>
       </li>
    );
}
export { TodoItem };