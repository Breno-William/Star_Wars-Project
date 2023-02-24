import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'


// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <LeadingPage/>,
//   },
//   {
//     path: "/LoginPage",
//     element: <LoginPage/>
//   },
//   {
//     path: "/RegisterPage",
//     element: <RegisterPage/>
//   },
//   {
//     path: "/Home",
//     element: <Home/>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
