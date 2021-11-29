import React, {useEffect} from 'react'
import "./Sidebar.scss"
import { Link } from 'react-router-dom'
import { Form, Button, Spinner } from "react-bootstrap";
import { FaUser, FaPowerOff, FaHome } from "react-icons/fa"
import { AiFillMedicineBox } from "react-icons/ai"
import Cookies from 'universal-cookie'

const Sidebar = (props) => {

    const cookies = new Cookies();

    const cerrarSesion = () => {
        cookies.remove('id', { path: '/' });
        cookies.remove('nombre', { path: '/' });
        cookies.remove('apellido', { path: '/' });
        cookies.remove('empresa', { path: '/' });
        cookies.remove('email', { path: '/' });
        cookies.remove('password', { path: '/' });
        props.history.push('./');

    }

    useEffect(()=>{
        if(!cookies.get('id')){
            props.history.push('./');
        }
          },[]);

    return (
        <div className="sidebar">
            <Link to="/"><img className="logo" src="/img/logo-header3.png" alt="Twittit" /></Link>

            <div className="buttons">
                <Link to="/fassad"><FaHome size="1.1em" />Inicio</Link>
                <Link to="/products"><AiFillMedicineBox size="1.2em" />Productos</Link>
                <Link to="/fassad"><FaUser size='1.1em' />Perfil</Link>
                <Link to="/"><FaPowerOff size="1.1em" />Cerrar Sesión</Link>
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
