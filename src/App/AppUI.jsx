import React from "react";
import {ToDoCounter} from '../components/ToDoCounter/ToDoCounter.jsx'
import {ToDoSearch} from '../components/ToDoSearch/ToDoSearch.jsx'
import {ToDoList} from '../components/ToDoList/ToDoList.jsx'
import {ToDoItem} from '../components/ToDoItem/ToDoItem.jsx'
import {CreateToDoButton} from '../components/CreateToDoButton/CreateToDoButton.jsx'
function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){

    return (
        <React.Fragment>
          <ToDoCounter 
            completed={completedTodos}
            total={totalTodos}
          />
          <ToDoSearch 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />
    
          <ToDoList>
            {searchedTodos.map(todo => (
              <ToDoItem 
                key={todo.text}
                text = {todo.text}
                completed = {todo.completed}
                onComplete = {() => completeTodo(todo.text)} 
                onDelete = {() => deleteTodo(todo.text)}      
                />
            ))}
            
          </ToDoList>
    
          <CreateToDoButton />
         </React.Fragment> 
      );
}
export {AppUI};