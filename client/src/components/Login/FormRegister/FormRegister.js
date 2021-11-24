import React, { useState } from 'react'
import { Form, Button, Spinner, Row, Col } from "react-bootstrap"
import './FormRegister.scss'

const FormRegister = (props) => {
    const { openModal, setShowModal, setRefreshCheckLogin } = props;
    const [formData, setFormData] = useState(initialFormValue());
    const [signUpLoading, setSignUpLoading] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='form-register'>
            <h2>Registro</h2>
            <p>Te enviaremos un email cuando tu cuenta sea activada</p>

            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Tu nombre" defaultValue={formData.name} name="nombre" />
                        </Col>
                        <Col>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Tu apellido" defaultValue={formData.lastName} name="apellido" />
                        </Col>
                    </Row>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Tu email" defaultValue={formData.email} name="email" />
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control id="last" type="password" placeholder="Tu contraseña" defaultValue={formData.password} name="password" />
                    <Form.Label>Repetir contraseña</Form.Label>
                    <Form.Control id="last" type="password" placeholder="Tu contraseña" defaultValue={formData.repeatPassword} name="password" />

                    <Button variant="secondary" type="submit">
                        {!signUpLoading ? "Registrarse" : <Spinner animation="border" />}
                    </Button>

                </Form.Group>
            </Form>
        </div>
    )
}

export default FormRegister

function initialFormValue() {
    return {
        name: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    };
}
