import React from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import {TodoList} from "../TodoList"
import { HeaderDate } from "../HeaderDate";
import './App.css';



const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Tomar el curso de react', completed: false },
  { text: 'Ir a Buenos Aires', completed: false }
]

function App() {
  const [todos,setTodo]= React.useState (defaultTodos)
  const [searchValue,setSearchValue] = React.useState('') 

  const completedTodos = todos.filter( todo => todo.completed).length;
  const totalTodos = todos.length
  
   // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
   let searchedTodos = [];

   // Lógica para filtrar
   if (!searchValue.length >= 1) {
     searchedTodos = todos;
   } else {
     searchedTodos = todos.filter(todo => {
       const todoText = todo.text.toLowerCase();
       const searchText = searchValue.toLowerCase();
       return todoText.includes(searchText);
     });
   }

  //  Marcar completos en los que clickee que esta echo, para eso buscamos el que tenemos que eliminar, luego copiamos denuevo el array con los todos que estan por hacerse y eliminarlo
   const completeTodos = (text)=>{
    const todoItem = todos.findIndex(todo => todo.text === text)
    const newTodo = [...todos]
    newTodo[todoItem].completed = true 
    setTodo(newTodo)
   }

  //  Funcion para borrar los todos 
  const deleteTodos = (text)=>{
    const todoItem = todos.findIndex(todo => todo.text === text)
    const newTodo = [...todos]
    newTodo.splice(todoItem, 1 )
    setTodo(newTodo)
    console.log('se hace el click')
   }

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
    
  );
}

export default App;
