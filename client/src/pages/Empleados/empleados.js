import { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';
import FormEmployees from '../../components/Forms/FormEmployees';
import BasicModal from '../../components/modal/BasicModal'
import Table from 'react-bootstrap/Table';
import './empleados.scss';
import { Form, Button, Spinner } from "react-bootstrap";
import Layout from '../../components/Layout/Layout';

function Empleados() {

    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);


    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [position, setPosition] = useState('');
    const [wage, setWage] = useState(0);
    const [newWage, setNewWage] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    };

    const addEmployee = () => {
        Axios.post("http://localhost:3001/create", {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
        }).then(() => {
            console.log("success")
        })
    }

    const updateEmployeeWage = (id) => {
        Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((index) => {
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

    const fetchEmployee = async () => {
        try {
            const res = await axios.get("http://localhost:3001/employees").then((response) => {
                setEmployeeList(response.data)
            });
        } catch (err) {
            console.error(err)
        }
    }

    const newEmployee = () => {
        return (
            <FormEmployees />
        )
    }



    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            setEmployeeList(employeeList.filter((valoror) => {
                return valoror.id !== id
            }))
        })
    }

    useEffect(() => {
        fetchEmployee();
    })

    return (
        <>
            <Layout>
                <section id="empleados">

                    <div className="container-90">
                        <div className="frst-btn">
                            <Button variant="secondary" className="add_employee">
                                Añadir empleado
                            </Button>
                        </div>
                        <div className="table-div">
                            <Table striped bordered hover>
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Puesto</th>
                                        <th>Salario</th>
                                        <th>Edad</th>
                                        <th><span>Editar</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employeeList.map((valor, key) => (
                                        <tr key={valor.id}>
                                            <td>
                                                <span className='name'>{valor.name}</span>
                                            </td>
                                            <td>
                                                <span>{valor.position}</span>
                                            </td>
                                            <td><span className="wage">{`$${valor.wage}`}</span></td>
                                            <td>
                                                <span>{`${valor.age} años`}</span>
                                            </td>
                                            <td>
                                                <Button onClick={() => openModal(
                                                    <div className="editar-empleado">
                                                        <h2>Editar Sueldo</h2>
                                                        <Form>
                                                            <Form.Group>
                                                                <Form.Label>Nuevo sueldo</Form.Label>
                                                                <Form.Control type="number" placeholder="$" name="wage" onChange={(event) => {
                                                                    setNewWage(event.target.valorue)
                                                                }} />

                                                                <Button variant="primary" type="submit" onClick={() => { updateEmployeeWage(valor.id) }}>
                                                                    Actualizar
                                                                </Button>

                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                )} variant="primary">Editar</Button>
                                                <Button variant="danger">Eliminar</Button>
                                            </td>
                                        </tr>
                                    ))}
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

    );
}

export default Empleados;


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
                        setNewWage(event.target.valorue)
                    }} />

                    <Button variant="primary" type="submit" onClick={() => { updateEmployeeWage() }}>
                        Actualizar
                    </Button>

                </Form.Group>
            </Form>
        </div>
    )
}

