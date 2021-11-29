import React, { useState, useEffect } from 'react'
import LayoutAdmin from "../../components/Layout/LayoutAdmin"
import Layout from '../../components/Layout/Layout'
import Table from 'react-bootstrap/Table'
import { Form, Button, Spinner } from "react-bootstrap"
import BasicModal from '../../components/modal/BasicModal'
import EditarEmpleado from '../../components/Forms/EditarEmpleado'
import axios from 'axios'
import Cookies from 'universal-cookie'

import "./empleados.scss"

const Sample = () => {
    const [showModal, setShowModal] = useState(false)
    const [contentModal, setContentModal] = useState(null)

    const [clientsList, setClientsList] = useState([])

    const openModal = content => {
        setShowModal(true)
        setContentModal(content)
    };

    const fetchClients = async () => {
        try {
            const res = await axios.get("http://localhost:3001/clientes").then((response) => {
                setClientsList(response.data)
            });
        } catch (err) {
            console.error(err)
        }
    };

    useEffect(() => {
        fetchClients()
    });

    return (
        <>
            <Layout>
                <section id="empleados">
                    <div className="container-90">
                        <div className="frst-btn">
                            <Button variant="secondary" className="add_employee" onClick={() => openModal(<EditarEmpleado />)}>
                                Añadir empleado
                            </Button>
                        </div>
                        <div className="table-div">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>id_cliente</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Empresa</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientsList.map((valor, key) => (
                                        <tr key={valor.id}>
                                            <td>
                                                <span className='nombre'>{valor.nombre}</span>
                                            </td>
                                            <td>
                                                <span>{valor.apellido}</span>
                                            </td>
                                            <td><span>{valor.empresa}</span></td>
                                            <td>
                                                <span>{valor.email}</span>
                                            </td>
                                            <td>
                                                <Button onClick={() => openModal()} variant="primary">Editar</Button>
                                                <Button variant="danger">Eliminar</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        <h5>Id: {Cookies.get('client_id')}</h5>
                        <h5>Nombre: {Cookies.get('client_nombre')}</h5>
                        <h5>Apellido: {Cookies.get('client_apellido')}</h5>
                        <h5>Empresa: {Cookies.get('client_empresa')}</h5>
                        <h5>Email: {Cookies.get('client_email')}</h5>
                        <h5>Password: {Cookies.get('client_password')}</h5>

                    </div>
                </section>
            </Layout>
            <BasicModal show={showModal} setShow={setShowModal} >
                {contentModal}
            </BasicModal>
        </>
    )
}

export default Sample
