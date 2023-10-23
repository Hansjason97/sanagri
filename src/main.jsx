import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Loading from './components/Loading';
import './index.css'
import Layout from './Layout';
import { HelmetProvider } from 'react-helmet-async';
import './i18n.js';

const App = React.lazy(()=>import('./App.jsx'));
const Letter = React.lazy(()=>import('./routes/Letter.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loading/>}><Layout/></Suspense>,
    children: [
      {
        path:"/",
        element: <App/>
      },
      {
        path:"/invitation",
        element: <Letter/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  </React.StrictMode>,
)
