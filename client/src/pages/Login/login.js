import React, { useState } from 'react'
import BasicModal from '../../components/modal/BasicModal'
import { Form, Button, Spinner } from "react-bootstrap"
import { Link } from 'react-router-dom'
import FormRegister from '../../components/Login/FormRegister/FormRegister'

import './login.scss'
import '../../components/Login/FormLogin/FormLogin.scss'

const Login = (props) => {
    const { setRefreshCheckLogin } = props;
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    };

    return (
        <>
            <div className="login" fluid>
                <FormLogin2
                    openModal={openModal}
                    setShowModal={setShowModal} />
                <RightComponent />

            </div>
            <BasicModal show={showModal} setShow={setShowModal} >
                {contentModal}
            </BasicModal>
        </>
    )
}

export default Login

const RightComponent = () => {
    return (
        <div className='login__right' id="right">
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
        <div className="sign-in-form">
            <div className="container-login">
                <img src="/img/logo-header3.png" className="logo" alt="" />
                <div className="formulario">
                    <h3>Clientes</h3>
                    <h2>Acceder</h2>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Tu email" defaultValue={formData.email} name="email" />
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control id="last" type="password" placeholder="Tu contraseña" defaultValue={formData.password} name="password" />
                            <Link className="forget" to="/recuperar-password"><span>Olvidé mi contraseña</span></Link>
                            <Link to="/empleados">
                                <Button variant="primary" type="submit">
                                    {!signInLoading ? "Iniciar sesión" : <Spinner animation="border" />}
                                </Button>
                            </Link>
                            <hr />

                            <Button class="register" variant="secondary" type="submit" onClick={() => openModal(<FormRegister/>)}>
                                {!signInLoading ? "Registrarse" : <Spinner animation="border" />}
                            </Button>
                            <Link className="soy-empleado" to="/login-empleado"><span>Soy empleado</span></Link>

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

