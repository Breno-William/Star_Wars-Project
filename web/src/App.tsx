import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LeadingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { Home } from './pages/Home'
import { PrivateRoutes } from "./pages/PrivateRoutes"

export function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route element={<Home/>} path="/Home"/>
          </Route>
          <Route element={<LeadingPage/>} path="/"/>
          <Route element={<LoginPage/>} path="/LoginPage"/>
          <Route element={<RegisterPage/>} path="/RegisterPage"/>
        </Routes>
      </Router>
    </div>
  )
}
