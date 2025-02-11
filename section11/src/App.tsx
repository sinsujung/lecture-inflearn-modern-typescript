import React from 'react';
import { useState, useRef, useEffect, useReducer } from "react";
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import { Todo } from "./types";

type Action = 
| {
  type : "CREATE",
  data : {
    id : number,
    content : string;
  }
} | { type : "DELETE"; id : number };
function reducer(state: Todo[], action: Action) {
  switch(action.type) {
    case 'CREATE':
      return [...state, action.data]
    case 'DELETE':
      return state.filter((it) => it.id !== action.id);
  }
}

function App() {
// typescript에서 useState 사용법
  // const [todos, setTodos] = useState<Todo[]>([])

// typescript에서 useReducer 사용법
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);


  const onClickAdd = (text: string) => {
    // setTodos([
    //   ...todos,
    //   {
    //     id: idRef.current++,
    //     content: text,
    //   },
    // ]);

    dispatch({
      type : "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
        ))}
      </div>
      </div>
  );
}

export default App;
