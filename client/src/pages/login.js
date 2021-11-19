import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section>
            <div className="flex min-h-screen overflow-hidden">
                <div className="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <img src="/img/logo-header3.png" alt="Bioprotece Logo" className='filter invert h-16 ml-auto mr-auto mb-5' />
                    <div className="w-full max-w-xl mx-auto lg:w-96">
                        <div>
                            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600"> Ingresar </h2>
                        </div>
                        <div className="mt-8">
                            <div className="mt-6">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email </label>
                                        <div className="mt-1">
                                            <input id="email" name="email" type="email" autoComplete="email" required placeholder="Email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-neutral-600"> Contraseña </label>
                                        <div className="mt-1">
                                            <input id="password" name="password" type="password" autoComplete="current-password" required placeholder="Contraseña" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" className="w-4 h-4 text-blue-400 border-gray-200 rounded  focus:ring-blue-500" />
                                            <label htmlFor="remember-me" className="block ml-2 text-sm text-neutral-600"> Recordar usuario </label>
                                        </div>
                                        <div className="text-sm">
                                            <a href="#" className="font-medium text-blue-400 hover:text-blue-500"> Olvidaste tu contraseña? </a>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to='/empleados'><button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-400  rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> Ingresar </button></Link>
                                    </div>
                                </form>
                                <div className="relative my-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-neutral-600"> O continuar con </span>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="
                w-full
                items-center
                block
                px-10
                py-3.5
                text-base
                font-medium
                text-center text-blue-400
                transition
                duration-500
                ease-in-out
                transform
                border-2 border-white
                shadow-md
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-gray-500
              ">
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                                                <defs>
                                                    <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                                </defs>
                                                <clipPath id="b">
                                                    <use xlinkHref="#a" overflow="visible" />
                                                </clipPath>
                                                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                                <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                                <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                                <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                            </svg>
                                            <span className="ml-4"> Ingresar con Google</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
                    <img className="absolute inset-0 object-cover w-full h-full" src="/img/login.jpg" alt="" />
                </div>
            </div>
        </section>

    )
}

export default Login
