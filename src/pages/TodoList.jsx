import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Belajar React", isCompleted: false },
    { text: "Belajar React Hooks", isCompleted: false },
    { text: "Belajar state management React", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value }];
      setTodos(addedTodo);
    } else {
      alert("Maksimal 10 aja bosque...!");
    }
  };

  const completeTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const clearTodos = () => setTodos([]);

  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
