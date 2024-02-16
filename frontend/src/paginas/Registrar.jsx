import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import axios from "axios"

export const Registrar = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [ alerta, setAlerta ] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()

        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return
        }

        if( password.length < 6 ){
            setAlerta({
                msg: "Password minimo de 6 caracteres",
                error: true
            })
            return
        }

        if(password !== repetirPassword){
            setAlerta({
                msg: "Los password no son iguales",
                error: true
            })
            return
        }       

        setAlerta({})
        // Crea usuario en la API
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`,{ nombre, email, password } )


           setAlerta({
            msg: data.msg,
            error: false
           })
           setNombre('')
           setEmail('')
           setPassword('')
           setRepetirPassword('')
        } catch (error) {
            //console.log(error.response.data.msg)
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

  return (
    <>
    <h1 className="text-sky-600 font-black text-5xl capitalize">Crea tu cuenta y administra tus 
        <span className="text-slate-700"> proyectos </span> 
    </h1>

    {/* {msg && <Alerta alerta={alerta} />} */}

    <form 
        className="my-8 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
        >
        <div>
            {msg && <Alerta alerta={alerta} />}
        </div>
        <div>
            <label
                 className="uppercase text-gray-600 block text-xl font-bold "
                 htmlFor="nombre"
                 >Nombre</label>
            <input 
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 "
                value={nombre}
                onChange={e => setNombre(e.target.value)}
            />
        </div>

        <div>
            <label
                 className="uppercase text-gray-600 block text-xl font-bold "
                 htmlFor="email"
                 >Email</label>
            <input 
                type="email"
                id="email"
                placeholder="Email de registro"
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
                placeholder="Password de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 "
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
        </div>

        <div className="mt-4">
            <label
                 className="uppercase text-gray-600 block text-xl font-bold "
                 htmlFor="password2"
                 >Repetir Password</label>
            <input 
                type="password"
                id="password2"
                placeholder="Repite tu password"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 "
                value={repetirPassword}
                onChange={e => setRepetirPassword(e.target.value)}
                />
        </div>

        <input
             type="submit"
             value="Crear cuenta"
             className="bg-sky-600 w-full py-3 mt-5 mb-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-900 transition-colors " 
            />
    
    </form>

    <nav className="lg:flex lg:justify-between">
        <Link 
            className="block text-center text-slate-500 uppercase text-xs"
            to="/">
            ¿Ya tienes una cuenta?  Inicia sesión
        </Link>
        <Link 
            className="block text-center text-slate-500 uppercase text-xs"
            to="/olvide-password">
            Olvide mi password
        </Link>
        

    </nav>
    
</>
  )
}
