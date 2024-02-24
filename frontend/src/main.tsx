import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import AccountInquiry from './pages/Customer/AccountInquiry.tsx'
import MainDashboardPage from './pages/Dashboard/MainDashboardPage'


const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    errorElement:<div>404 Not Found</div>
  },
  {
    path:'/AccountInquiry',
    element:<AccountInquiry/>
  },
  {
    path:'/MainDashboard',
    element:<MainDashboardPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
