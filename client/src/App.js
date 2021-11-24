import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Empleados from './pages/Empleados/empleados';
import Login from './pages/Login/login';
import LoginEmpleado from './pages/Login/LoginEmpleado/loginEmpleado';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/login-empleado' element={<LoginEmpleado />}  />
        <Route path='/empleados' element={<Empleados />}  />
      </Routes>
    </Router>
  )
}

export default App
