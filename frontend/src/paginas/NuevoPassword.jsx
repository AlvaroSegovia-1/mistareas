import { Link, useParams} from "react-router-dom"
import { useState, useEffect } from "react"
//import axios from "axios"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"

const NuevoPassword = () => {

  const [password, setPassword] = useState('')
  const [tokenValido, setTokenValido] = useState(false)
  const [alerta, setAlerta] = useState({})
  const [passwordModificado, setPasswordModificado] = useState(false)

  const params = useParams()
  const { token } = params

  //console.log(params)

  useEffect(()=>{
      const comprobarToken = async () => {
        try {
           await clienteAxios(`/usuarios/olvide-password/${token}`)
          //console.log(data)
          setTokenValido(true)
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })
        }
      }
      comprobarToken()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(password.length < 6 ){
      setAlerta({
        msg: 'El Password debe ser minimo de 6 caracteres',
        error: true
      })
      return
    }
    try {
      const url = `/usuarios/olvide-password/${token}`
      const { data } = await clienteAxios.post(url, {password})
      setAlerta({
        msg: data.msg,
        error: false
      })
      setPasswordModificado(true)
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
      <h1 className="text-sky-600 font-black text-5xl capitalize">Reestablece tu  password y no pierdas acceso a tus<span className="text-slate-700">  proyectos </span> 
      </h1>
      <div className="mt-10">
        {msg && <Alerta alerta={alerta} />}
      </div>
      

      {tokenValido && (
      <form 
        className="my-8 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
        >

        <div className="mt-4">
          <label
               className="uppercase text-gray-600 block text-xl font-bold "
               htmlFor="password"
               >Nuevo Password</label>
          <input 
              type="password"
              id="password"
              placeholder="Escribe tu nuevo password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-100 "
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
        </div>

        <input
             type="submit"
             value="Guardar nuevo password"
             className="bg-sky-600 w-full py-3 mt-5 mb-5 text-white uppercase   font-bold rounded-xl hover:cursor-pointer hover:bg-sky-900  transition-colors " />    
    </form>  
      )}

      { passwordModificado && (
            <Link 
                className="block text-center text-slate-500 uppercase text-xs"
                to="/">
                 Inicia sesión
            </Link>
            )}

        
    </>
  )
}

export default NuevoPassword
