import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap"
import Axios from 'axios';

const EditarEmpleado = (props) => {

    const [newWage, setNewWage] = useState(0);
    const [employeeList, setEmployeeList] = useState([]);

    const onSubmit = e => {
        e.preventDefault();
    }

    const updateEmployeeWage = (id) => {
        Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((valor) => {
                        return valor.id === id
                            ? {
                                id: valor.id,
                                name: valor.name,
                                country: valor.country,
                                age: valor.age,
                                position: valor.position,
                                wage: newWage,
                            }
                            : valor;
                    })
                );
            }
        );
    };

    return (
        <div className="editar-empleado">
            <h2>Editar Sueldo</h2>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Nuevo sueldo</Form.Label>
                    <Form.Control type="number" placeholder="$" name="wage" onChange={(event) => {
                        setNewWage(event.target.valor)
                    }} />

                    <Button variant="primary" type="submit" onClick={() => { updateEmployeeWage(valor.id) }}>
                        Actualizar
                    </Button>

                </Form.Group>
            </Form>
        </div>
    )
}

export default EditarEmpleado
