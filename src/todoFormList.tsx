import React, { useEffect } from "react";
import { useRef } from "react";
interface ToDoForm {
  setTask: (tasks: string) => void;
  setList: (task: string[]) => void;
  list: string[];
  task: string;
}

const ToDoForm = (props: ToDoForm) => {

  useEffect(() => {
    ref.current?.focus();
  });
  function handle(e: React.FormEvent) {
    e.preventDefault();
    props.setList([...props.list, props.task]);
    props.setTask('')
  }
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form action="">
      <h1>input here</h1>
      <input
        value={props.task}
        id="input"
        ref={ref}
        type="text"
        onChange={(e) => {
          props.setTask(e.target.value);
        }}
      />
      <input onClick={handle} id="submit" type="submit" value="add" />
    </form>
  );
};
export default ToDoForm;
