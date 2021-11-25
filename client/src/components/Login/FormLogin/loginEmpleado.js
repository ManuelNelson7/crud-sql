import React, { useState } from 'react'
import { Form, Button, Spinner } from "react-bootstrap"
import { Link } from 'react-router-dom'

import '../../../components/Login/FormLogin/FormEmpleado.scss'

const LoginEmpleado = (props) => {
    const { setRefreshCheckLogin } = props;
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    };

    return (
        <>
            <div className="login-em" fluid>
                <FormLogin2
                    openModal={openModal}
                    setShowModal={setShowModal} />
                <RightComponentEm />

            </div>
        </>
    )
}

export default LoginEmpleado

const RightComponentEm = () => {
    return (
        <div className='login__right-emp' id="right">
        </div>
    )
}

const FormLogin2 = (props) => {
    const { openModal, setShowModal, setRefreshCheckLogin } = props;
    const [formData, setFormData] = useState(initialFormValue());
    const [signInLoading, setSignInLoading] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="sign-in-form-emp">
            <div className="container-login-emp">
                <img src="/img/logo-header3.png" className="logo" alt="" />
                <div className="formulario-emp">
                    <h3>Empleados</h3>
                    <h2>Acceder</h2>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Tu email" defaultValue={formData.email} name="email" />
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control id="last" type="password" placeholder="Tu contraseña" defaultValue={formData.password} name="password" />
                            <Link className="forget" to="/recuperar-password"><span>Olvidé mi contraseña</span></Link>
                            <Link to="/empleados">
                                <Button variant="purple" type="submit">
                                    {!signInLoading ? "Iniciar sesión" : <Spinner animation="border" />}
                                </Button>
                            </Link>
                            <hr />
                            <Link className="soy-empleado" to="/"><span>Volver</span></Link>


                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    )


}

function initialFormValue() {
    return {
        email: "",
        password: ""
    };
}

