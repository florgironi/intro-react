import React from 'react';
import "./CreateTodoButton.css"

function CreateTodoButton(props){
    return(
        <button
        className='button'
        onClick={()=>{console.log('click')}}
        >
            +
        </button>
    );
}
export { CreateTodoButton };