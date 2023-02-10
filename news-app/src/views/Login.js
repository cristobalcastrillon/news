import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    let navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false))

    const users = [{ username: "Cristobal", password: "password" }];

    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username)
        if (account && account.password === password) {
            setAuthenticated(true)
            localStorage.setItem("authenticated", true)    
            navigate("/")
        }
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='border rounded overflow-hidden shadow-lg p-3'>
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="username">
                            Nombre de usuario
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Nombre de usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="******************"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white mb-4 mt-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
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