import React from "react";
import { AppUI } from "./AppUI";



function App() {
  // Persistencia de datos
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos = [];

  if(!localStorageTodos){
    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];

  } else{
     // Si existen TODOs en el localStorage los regresamos como nuestros todos
     parsedTodos = JSON.parse(localStorageTodos);
  }

   // Creamos la función en la que actualizaremos nuestro localStorage
   const saveTodos = (newTodos) => {
    // Convertimos a string nuestros TODOs
    const stringifiedTodos = JSON.stringify(newTodos);
    // Los guardamos en el localStorage
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    // Actualizamos nuestro estado
    setTodo(newTodos);
  };

// Guardamos nuestros TODOs del localStorage en nuestro estado
  const [todos,setTodo]= React.useState (parsedTodos)
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
    saveTodos(newTodo)
   }

  //  Funcion para borrar los todos 
  const deleteTodos = (text)=>{
    const todoItem = todos.findIndex(todo => todo.text === text)
    const newTodo = [...todos]
    newTodo.splice(todoItem, 1 )
    saveTodos(newTodo)
   }

  return (
    <AppUI 
      totalTodos= {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodos = {completeTodos}
      deleteTodos = {deleteTodos}
    />
    
  );
}

export default App;
