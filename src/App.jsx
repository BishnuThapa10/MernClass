import { createBrowserRouter } from "react-router"
import RootLayOut from "./components/RootLayOut"
import { RouterProvider } from "react-router-dom"
import ToDoList from "./features/todo/ToDoList"
import ToDoEdit from "./features/todo/ToDoEdit"

export default function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootLayOut/>,
      children:[
        {
          index:true,
          element: <ToDoList/>
        },
        {
          path:'update-task/:id',
          element: <ToDoEdit/>
        },
        
      ]
    }
  ])

  return <RouterProvider router={router} />
}
