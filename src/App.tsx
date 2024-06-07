import "./App.css";
import ToDoForm from "./todoFormList";
import { useState } from "react";
import People from "./people";
import Field from "./field";
function App() {
  const [tasks,setTasks] = useState('')
  const [list, setList] = useState<string[]>([]);
  // const [list,setList] =useState([])
  console.log(list)

  return (
    <div>
      <head>
        <People></People>
      </head>
      <ToDoForm
      setTask={setTasks}
      task={tasks}
      list={list}
      setList={setList}
      />
      <Field
      list={list}
      />
    </div>
  );
}

export default App;
