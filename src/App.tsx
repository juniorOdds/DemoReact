import "./App.css";
import ToDoForm from "./todoFormList";
import { useState } from "react";
import Field from "./field";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home";
function App() {
  const [tasks, setTasks] = useState("");
  const [list, setList] = useState<string[]>([]);
  // const [list,setList] =useState([])
  console.log(list);
  
  return (
    <div>
      <body>
        <ToDoForm
          setTask={setTasks}
          task={tasks}
          list={list}
          setList={setList}
        />
        <Field list={list} />
      </body>
    </div>
  );
}
const Root = () => (
  <div>
    <Nav />
    <Outlet />
  </div>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path:'/home',
        element:<Home/>
      }

    ]
  },
]);
const RouteMain= ()=>{
  return <RouterProvider router={router} />;
}

export default RouteMain;
