import { createBrowserRouter } from "react-router"
import RootLayOut from "./components/RootLayOut"
import { RouterProvider } from "react-router-dom"
import EmployeesList from "./features/employees/EmployeesList"
import AddEmployee from "./features/employees/AddEmployee"
import UpdateEmployee from "./features/employees/UpdateEmployee"

export default function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootLayOut/>,
      children:[
        {
          index:true,
          element: <EmployeesList/>
        },
        {
          path:'add-employee',
          element: <AddEmployee/>
        },
        {
          path:'update-employee/:id',
          element: <UpdateEmployee/>
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}
