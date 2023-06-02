import React from "react";

import {TodoCounter} from "../TodoCounter/index";
import {TodoSearch} from "../TodoSearch/index";
import {TodoItem} from "../TodoItem/index";
import {CreateTodoButton} from "../CreateTodoButton/index";
import {TodoList} from "../TodoList/index"
import { HeaderDate } from "../HeaderDate/index";
import './App.css';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos,
}) {  
    return(
        <div className="container">
      <HeaderDate/>
      <TodoCounter
        total= {totalTodos}
        completed = {completedTodos}

      />

      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map(todos =>(
        <TodoItem 
          key={todos.text} 
          text={todos.text}
          completed = {todos.completed}
          onComplete = {()=>{completeTodos(todos.text)}} 
          onDelete = {()=>{deleteTodos(todos.text)}}  

        />
      ))}
      </TodoList>
      
      <CreateTodoButton/>
    </div>
    )
}

export {AppUI}