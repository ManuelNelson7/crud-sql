import { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';
import FormEmployees from '../../components/Forms/FormEmployees';
import Table from 'react-bootstrap/Table';
import './empleados.scss';
import { Form, Button, Spinner } from "react-bootstrap";
import Layout from '../../components/Layout/Layout';

function Empleados() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [position, setPosition] = useState('');
    const [wage, setWage] = useState(0);

    const [form, setForm] = useState(false);

    const [newWage, setNewWage] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);

    const closeForm = () => {
        setForm(false);
    }

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

    const updateEmployeeWage = (id) => {
        Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id === id
                            ? {
                                id: val.id,
                                name: val.name,
                                country: val.country,
                                age: val.age,
                                position: val.position,
                                wage: newWage,
                            }
                            : val;
                    })
                );
            }
        );
    };

    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            setEmployeeList(employeeList.filter((val) => {
                return val.id !== id
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
                                    {employeeList.map((val, key) => (
                                        <tr key={val.id}>
                                            <td>
                                                <span className='name'>{val.name}</span>
                                            </td>
                                            <td>
                                                <span>{val.position}</span>
                                            </td>
                                            <td><span className="wage">{`$${val.wage}`}</span></td>
                                            <td>
                                                <span>{`${val.age} años`}</span>
                                            </td>
                                            <td>
                                                <Button variant="primary">Editar</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </section>
            </Layout>

        </>

    );
}

export default Empleados;
