import React from 'react'
import "./Sidebar.scss"
import { Link } from 'react-router-dom'
import { Form, Button, Spinner } from "react-bootstrap";
import { FaUser, FaPowerOff, FaHome } from "react-icons/fa"
import { AiFillMedicineBox } from "react-icons/ai"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/"><img className="logo" src="/img/logo-header3.png" alt="Twittit" /></Link>

            <div className="buttons">
                <Link to="/fassad"><FaHome size="1.1em" />Inicio</Link>
                <Link to="/products"><AiFillMedicineBox size="1.2em" />Productos</Link>
                <Link to="/fassad"><FaUser size='1.1em' />Perfil</Link>
                <Link to="/logout"><FaPowerOff size="1.1em" />Cerrar Sesión</Link>
            </div>

            <a href="https://bioprotece.com#contacto" target="_blank">
                <Button variant="primary">
                    Contacto
                </Button>
            </a>
        </div>
    )
}

export default Sidebar
