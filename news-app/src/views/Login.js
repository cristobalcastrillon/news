import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='border rounded overflow-hidden shadow-lg p-3'>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-4" for="username">
                            Nombre de usuario
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nombre de usuario" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-4" for="password">
                            Contraseña
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white mb-4 mt-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Ingresa
                        </button>
                        <Link to={'/signup'} className='text-center'>
                            ¿No te has registrado?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;