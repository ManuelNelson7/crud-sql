import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Sample from './pages/Empleados/Sample';
import Login from './pages/Login/login';
import LoginEmpleado from './components/Login/FormLogin/loginEmpleado';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/login-empleado' element={<LoginEmpleado />} />
        <Route path='/empleados' element={<Sample />} />
      </Routes>
    </Router>
  )
}

export default App
