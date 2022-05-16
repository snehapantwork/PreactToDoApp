// import { h } from "preact";
import { html } from "htm/preact";
import { useState } from "preact/hooks";
import TodoForm from "./TodoForm";
import style from "./style.css";
// import ToDoList from "./ToDoList";
// import TodoForm from "./TodoForm";

const ToDo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return html`${(<TodoForm edit={edit} onFormSubmit={submitUpdate} />)}`;
  }

  return html`
    ${todos.map((todo, index) => (
      <div class={style.todorow} key={index}>
        <div key={todo.id}>{todo.text}</div>
        <div>
          <button
            type="button"
            class={style.editicon}
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            {"Edit"}
          </button>
          <button
            type="button"
            onClick={() => removeTodo(todo.id)}
            class={style.deleteicon}
          >
            {"Delete"}
          </button>
        </div>
      </div>
    ))}
  `;
};

export default ToDo;
