import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './About'

import App from './App'
import Contact from './Contact'
import Error from './Error'

import RestarauntMenu from './RestarauntMenu'


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>,
        

    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
      path:"/restaurant/:resid",
      element:<RestarauntMenu/>
    }
])
const index = () => {
  return (
    <>
    
    </>
  )
}

export default index

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)