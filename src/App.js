import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoList} from "./TodoList"
import { HeaderDate } from "./HeaderDate";
import './App.css';



const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Tomar el curso de react', completed: false },
  { text: 'Ir a Buenos Aires', completed: false }

]

function App() {
  const [todos,setTodo]= React.useState (defaultTodos)
  const [searchValue,setSearchValue] = React.useState('') 

  const completedTodos = todos.filter( todo =>!!todo.completed).length;
  const totalTodos = todos.length
  

  return (
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
        {todos.map(todos =>(
        <TodoItem key={todos.text} text={todos.text}/>
      ))}
      </TodoList>
      
      <CreateTodoButton/>
    </div>
    
  );
}

export default App;
