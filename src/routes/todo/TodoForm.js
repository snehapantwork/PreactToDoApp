// import { h } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import style from "./style.css";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form class={style.todoform} onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            class={style.todoinput}
            type="text"
            name="todotask"
            value={input}
            placeholder="Enter the updated here!"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button class={[style.todobutton, style.edit]} onClick={handleSubmit}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            class={style.todoinput}
            type="text"
            name="todotask"
            value={input}
            placeholder="Enter the text here!"
            onInput={handleChange}
            ref={inputRef}
          ></input>
          <button class={style.todobutton} onClick={handleSubmit}>
            Add Task
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
