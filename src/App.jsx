import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut";
import CocktailList from "./pages/cocktaillist/CocktailList";
import Category from "./pages/category/Category";
import Detail from "./pages/detail/Detail";
import UseRefHook from "./pages/useRef/UseRefHook";

export default function App() {

  const router = createBrowserRouter([

    {
      path:'/',
      element:<RootLayOut/>,
      children:[
        {
          index:true,
          element:<CocktailList/>
        },
      {
        path:'category',
        element:<Category/>
      },
      {
        path:'detail/:id',
        element:<Detail/>
      },
      {
        path:'u',
        element:<UseRefHook/>
      },
      ]
    },

  ]);

  return <RouterProvider router ={router}/>
}
