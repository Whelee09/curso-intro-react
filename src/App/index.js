import {useLocalStorage} from './useLocalStorage.jsx'
//import './App.css';
import React from 'react';
import { AppUI } from './AppUI.jsx'

// const defaultTodos = [
//   { text: 'Cortar tomates', completed: false },
//   { text: 'Aprender react', completed: true },
//   { text: 'Estudiar algebra', completed: false },
//   { text: 'Estudiar calculo', completed: false },
//   { text: 'Usar estados derivados', completed: true },
//   { text: 'LOLOLOLOLO', completed: true }
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const searchedTodos = todos.filter(
    (todo) =>{
      const todoText = todo.text.toLowerCase();
      const searchValueText = searchValue.toLowerCase();
      return todoText.includes(searchValueText);
    }
  );


  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(indexTodo,1);
    saveTodos(newTodos);
  }
  return (
    <AppUI
      completedTodos ={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
