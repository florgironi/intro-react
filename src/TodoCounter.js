import React from 'react';
import './TodoCounter.css'

function TodoCounter({total, completed}){
    return(
        <h2 className='TodoCounter'> What do you do today? {completed} de {total} completos</h2>
    );
}
export { TodoCounter };