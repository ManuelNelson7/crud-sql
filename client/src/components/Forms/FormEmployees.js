import React, { useState } from 'react'
import { Axios } from 'axios';

const FormEmployees = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [position, setPosition] = useState('');
    const [wage, setWage] = useState(0);

    const [form, setForm] = useState('');

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

    return (
        <>
            <>
                <style dangerouslySetInnerHTML={{ __html: "\n  .-z-1 {\n    z-index: -1;\n  }\n\n  .origin-0 {\n    transform-origin: 0%;\n  }\n\n  input:focus ~ label,\n  input:not(:placeholder-shown) ~ label,\n  textarea:focus ~ label,\n  textarea:not(:placeholder-shown) ~ label,\n  select:focus ~ label,\n  select:not([value='']):valid ~ label {\n    /* @apply transform; scale-75; -translate-y-6; */\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))\n      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    --tw-scale-x: 0.75;\n    --tw-scale-y: 0.75;\n    --tw-translate-y: -1.5rem;\n  }\n\n  input:focus ~ label,\n  select:focus ~ label {\n    /* @apply text-black; left-0; */\n    --tw-text-opacity: 1;\n    color: rgba(0, 0, 0, var(--tw-text-opacity));\n    left: 0px;\n  }\n" }} />
                <div className="min-h-screen bg-gray-400 bg-opacity-40 w-full p-0 sm:p-12 absolute">
                    <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl relative">
                        <button className='absolute top-4 right-8' onClick={closeForm} >X</button>
                        <h1 className="text-2xl font-bold mb-8">Añadir empleado</h1>
                        <form id="form" noValidate>
                            <div className="relative z-0 w-full mb-5">
                                <input type="text" name="name" placeholder=" " required className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" onChange={(event) => {
                                    setName(event.target.value);
                                }} />
                                <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nombre</label>
                                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                            </div>
                            <div className="relative z-0 w-full mb-5">
                                <input type="text" name="email" placeholder=" " className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" onChange={(event) => {
                                    setPosition(event.target.value);
                                }} />
                                <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Puesto</label>
                                <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                            </div>
                            <div className="relative z-0 w-full mb-5">
                                <input type="number" name="email" placeholder=" " className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" onChange={(event) => {
                                    setAge(event.target.value);
                                }} />
                                <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Edad</label>
                                <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                            </div>
                            <div className="relative z-0 w-full mb-5">
                                <input type="text" name="password" placeholder=" " className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" onChange={(event) => {
                                    setCountry(event.target.value);
                                }} />
                                <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">País</label>
                                <span className="text-sm text-red-600 hidden" id="error">Password is required</span>
                            </div>

                            <div className="relative z-0 w-full mb-5">
                                <input type="number" name="money" placeholder=" " className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" onChange={(event) => {
                                    setWage(event.target.value);
                                }} />
                                <div className="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
                                <label htmlFor="money" className="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500">Salario</label>
                                <span className="text-sm text-red-600 hidden" id="error">Amount is required</span>
                            </div>
                            <button id="button" type="button" className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-green-600 hover:shadow-lg focus:outline-none" >
                                Añadir
                            </button>
                        </form>
                    </div>
                </div>
                <div className="empleados">
                    <ul>
                        {employeeList.map((val, key) => {
                            return (
                                <li key={val.id}>
                                    <h3>{val.name}</h3>
                                    <p>{`Puesto: ${val.position}`}</p>
                                    <p>{`Edad: ${val.age}`}</p>
                                    <p>{`País: ${val.country}`}</p>
                                    <p>{`Salario: $${val.wage}`}</p>
                                    <input type="text" placeholder='Editar Sueldo'
                                        onChange={(event) => {
                                            setNewWage(event.target.value)
                                        }}
                                    />
                                    <button onClick={() => { updateEmployeeWage(val.id) }}>Update</button>
                                    <button onClick={() => { deleteEmployee(val.id) }}>Delete</button>

                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        </>
    )
}

export default FormEmployees
