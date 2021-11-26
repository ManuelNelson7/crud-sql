import React from 'react'
import "./SidebarAdmin.scss"
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { FaUsers, FaUserCheck, FaPowerOff, FaHome, FaEnvelope } from "react-icons/fa"
import { AiFillMedicineBox } from "react-icons/ai"

const SidebarAdmin = () => {
    return (
        <div className="sidebar-admin">
            <a href="https://bioprotece.com.ar"><img className="logo-admin" src="/img/logo-header3.png" alt="Twittit" /></a>

            <div className="buttons-admin">
                <Link to="/empleados"><FaHome size="1.1em" />Inicio</Link>
                <Link to="/products"><AiFillMedicineBox size="1.2em" />Productos</Link>
                <Link to="/fassad"><FaUsers size='1.1em' />Clientes</Link>
                <Link to="/fassad"><FaUserCheck size='1.1em' />Activar cliente</Link>
                <Link to="/"><FaPowerOff size="1.1em" />Cerrar Sesión</Link>
            </div>

            <a href="https://mail.hostinger.com/?clearSession=true&_user=ventas@bioprotece.com" target="_blank">
                <Button variant="secondary"><FaEnvelope size="1em" />Webmail</Button>
            </a>
        </div>
    )
}

export default SidebarAdmin;
