import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './routes/Main.jsx';
import AddCoffee from './components/pages/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/pages/UpdateCoffee/UpdateCoffee.jsx';
import Home from './components/pages/Home/Home/Home.jsx';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import SingleItem from './components/pages/SingleItem/SingleItem';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:"singleItem/:id",
        element: <SingleItem></SingleItem>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
