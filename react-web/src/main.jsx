import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './component/Login.jsx';
import Home from '../src/Listcomponent/Home.jsx'
import About from '../src/Listcomponent/About.jsx'
import Service from '../src/Listcomponent/Service.jsx'
import Blog from './Listcomponent/Blog.jsx';
import Products from './Listcomponent/Products.jsx';
import Register from './component/Register.jsx';
import NotFound from './Listcomponent/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/about",
    element :<About/>
  },
  {
    path : "/services",
    element :<Service/>
  },
  {
    path :"/product",
    element :<Products/>

  },
  {
    path:"/blog",
    element:<Blog/>
  },
  {
    path :"/register",
    element:<Register/>
  },
  {
    path : "*",
    element:<NotFound/>
  }
]);
createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />
)
// https://proarea.tech/