import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import Axios from 'axios';
import "../../components/Forms/EditarEmpleado.scss";

const EditarEmpleado = (props) => {

    const [newWage, setNewWage] = useState(0);
    const [employeeList, setEmployeeList] = useState([]);

    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="editar-empleado">
            <h2>Editar Sueldo</h2>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Nuevo sueldo</Form.Label>
                    <Form.Control type="number" placeholder="$" name="wage" onChange={(event) => {
                        setNewWage(event.targetF.val)
                    }} />

                    <Button variant="primary" type="submit">
                        Actualizar
                    </Button>

                </Form.Group>
            </Form>
        </div>
    )
}

export default EditarEmpleado
