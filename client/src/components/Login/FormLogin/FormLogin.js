import React, { useState } from 'react'
import { Form, Button, Spinner } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './FormLogin.scss'

const FormLogin = (props) => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [signInLoading, setSignInLoading] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
        console.log(form);
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="sign-in-form">
            <div className="container-login">
                <img src="/img/logo-header3.png" className="logo" alt="" />
                <div className="formulario">
                    <h3>Clientes</h3>
                    <h2>Acceder</h2>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Tu email" name="email" />
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control id="last" type="password" placeholder="Tu contraseña" name="password" />
                            <Link className="forget" to="/recuperar-password"><span>Olvidé mi contraseña</span></Link>
                            <Link to="/empleados">
                                <Button variant="primary" type="submit">
                                    {!signInLoading ? "Iniciar sesión" : <Spinner animation="border" />}
                                </Button>
                            </Link>
                            <hr />
                            <Link to="/register">
                                <Button className="register" variant="secondary" type="submit">
                                    {!signInLoading ? "Registrarse" : <Spinner animation="border" />}
                                </Button>
                            </Link>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FormLogin
