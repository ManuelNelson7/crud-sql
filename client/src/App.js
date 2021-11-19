import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Empleados from './pages/empleados';
import Login from './pages/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/empleados' element={<Empleados />}  />
      </Routes>
    </Router>
  )
}

export default App
