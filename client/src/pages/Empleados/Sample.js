import React, { useState } from 'react'
import LayoutAdmin from "../../components/Layout/LayoutAdmin"
import Layout from '../../components/Layout/Layout'
import Table from 'react-bootstrap/Table'
import { Form, Button, Spinner } from "react-bootstrap"
import BasicModal from '../../components/modal/BasicModal'
import EditarEmpleado from '../../components/Forms/EditarEmpleado'

import "./empleados.scss"

const Sample = () => {
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    };

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
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry the Bird</td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
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
