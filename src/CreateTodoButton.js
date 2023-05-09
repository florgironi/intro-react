import React from 'react';
import "./CreateTodoButton.css"

function CreateTodoButton(props){
    const onClickButon = (msg)=>{
        alert(msg)
    }
    return(
        <button
        className='button'
        onClick={()=> {onClickButon('aqui se deberia abrir el modal')}}
        >
            +
        </button>
    );
}
export { CreateTodoButton };