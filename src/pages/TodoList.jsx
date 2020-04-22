import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Belajar React" },
    { text: "Belajar React Hooks" },
    { text: "Belajar state management React" }
  ]);
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
