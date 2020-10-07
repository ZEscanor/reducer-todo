import React, {useState,useReducer} from 'react';
import './App.css';
import {initialState,reducer} from './reducers/reducer.js';

const Todo = (props) => {
 console.log("todom", props.item.completed)
  return(

    <div className={`${props.item.completed ? "complete":""} `} onClick ={()=> props.completed(props.item.id)}>
      <p> {props.item.item} </p>
    {console.log(props.item.item)}

    </div>
  )
}

function TodoForm(props) {
  const [newTodoItem, setNewTodoItem] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    props.add(newTodoItem);
    setNewTodoItem("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="item"
          value={newTodoItem}
          placeholder="Type in your Todo - Click 'Add' to add it to your list"
          onChange={(e) => setNewTodoItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

function TodoList(props) {
 console.log("todo prop",props)
  return (
    <div>
      {props.todos.map((item) => (
        <Todo
          key={item.id}
          item={item}
          completed={props.completed}
          clearTodo= {props.clearTodo}
        />
      ))}
      <button onClick={props.clearTodo}>Clear Completed</button>
    </div>
  );
}



function App () {
const [state,dispatch] = useReducer(reducer,initialState);

  const add = (todoT) => {
   dispatch({type:"ADD_TODO", payload:todoT})
  }

  
  const completed = (id) => {
    console.log("completed");
    dispatch({ type:"TODO_COMPLETED", id: id });
  };
  const clearTodo = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm add={add} />
      <TodoList
        todos={state.todo}
        clearTodo={clearTodo}
        completed={completed}
      />
    </div>
  );
}


export default App;

  