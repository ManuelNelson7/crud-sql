import { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';
import FormEmployees from '../components/Forms/FormEmployees';

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

            {form && <buton onClick={closeForm}>X</buton>}
            {form && <FormEmployees />}


            <div className="flex flex-col items-center">
                <div className="w-9/12 flex justify-end items-center py-4">
                    <button id="button" type="button" className="px-2 py-2  flex justify-items-end text-s text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-green-600 hover:shadow-lg focus:outline-none " onClick={() => {setForm(true)}}>
                        Añadir empleado
                    </button>
                </div>
                <div className="-my-2 overflow-x-auto w-9/12 sm:-mx-6 lg:-mx-8 flex justify-center">
                    <div className="py-2 align-middle inline-block w-full justify-center">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Nombre
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Puesto
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Salario
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Edad
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {employeeList.map((val, key) => (
                                        <tr key={val.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-semibold text-gray-900">{val.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{val.position}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{`$${val.wage}`}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{`${val.age} años`}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Empleados;
