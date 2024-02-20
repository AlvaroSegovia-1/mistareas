import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from '../components/Alerta'
import clienteAxios from "../config/clienteAxios"
import useAuth from '../hooks/useAuth'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault()

        if([email, password].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }

        try {
            const { data } = await clienteAxios.post('/usuarios/login', {email, password})
            setAlerta({})
            localStorage.setItem('token', data.token)
            setAuth(data)
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

  return (
   <>
        <h1 className="text-sky-600 font-black text-5xl capitalize">Inicia sesión   y administra tus 
            <span className="text-slate-700"> proyectos </span> 
        </h1>

        <div className="mt-10">
            {msg && <Alerta alerta = {alerta} /> }
        </div>
        

        <form className="my-8 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
        >
            <div>
                <label
                     className="uppercase text-gray-600 block text-xl font-bold "
                     htmlFor="email"
                     >Email</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="email de registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-100 " 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
            </div>
            <div className="mt-4">
                <label
                     className="uppercase text-gray-600 block text-xl font-bold "
                     htmlFor="password"
                     >Password</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="password de registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-100 "
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
            </div>

            <input
                 type="submit"
                 value="Iniciar Sesión"
                 className="bg-sky-600 w-full py-3 mt-5 mb-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-900 transition-colors " />

        
        </form>

        <nav className="lg:flex lg:justify-between">
            <Link 
                className="block text-center mt-1 text-slate-500 uppercase text-xs"
                to="/registrar">
                ¿No tienes una cuenta?  Registrate
            </Link>
            <Link 
                className="block text-center mt-1 text-slate-500 uppercase text-xs"
                to="/olvide-password">
                Olvide mi password
            </Link>
            

        </nav>
        
   </>
  )
}
