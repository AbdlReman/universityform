// Todo.jsx
import React, { useState } from "react";
import SingleTodo from "./SingleTodo";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const removeTodo = (id) => {
    let newTodos = data.filter((item) => {
      return item.id !== id;
    });
    setData(newTodos);
    setMessage("Todo removed successfully!");

    setTimeout(() => {
      setMessage("");
    }, 1100);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newTodo = { todo, id: Date.now() };
    setData([...data, newTodo]);
    setTodo(""); // Clear input field after adding todo
  };

  return (
    <>
      <div className="container col-lg-5 mx-auto shadow p-4">
        {message}
        <h1 className="display-4">TODOLIST</h1>
        <form>
          <label htmlFor="">Todo</label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="form-control"
            type="text"
            placeholder="enter your todo..."
          />
          <button onClick={handleClick} className="btn btn-dark my-1 w-100">
            Add todo
          </button>
        </form>
      </div>
      <div className="container col-lg-9 row mx-auto my-4">
        {data.map((item) => (
          <SingleTodo
            key={item.id}
            id={item.id}
            todoData={item.todo}
            remove={removeTodo}
          />
        ))}
      </div>
    </>
  );
};

export default Todo;
