import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar props di React"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar state di react"
    },
    {
      text: "Belajar javascript"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
