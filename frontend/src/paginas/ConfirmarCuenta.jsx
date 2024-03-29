/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams, Link} from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"

export const ConfirmarCuenta = () => {

    const [ alerta, setAlerta ] = useState({})
    const [ cuentaConfirmada, setCuentaConfirmada] = useState(false)

    const params = useParams()
    //console.log(params)
    const { id } = params
    
    useEffect(()=>{
        const confirmarCuenta = async () => {
            try {
                const url = `/usuarios/confirmar/${id}`
                const { data } = await clienteAxios(url)
                console.log(data)
                setAlerta({
                    msg: data.msg,
                    error: false
                })
                setCuentaConfirmada(true)
            } catch (error) {
                console.log(error)
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
                
            }
        }
        confirmarCuenta()
    },[])

    const { msg } = alerta


  return (
    <>
        <h1 className="text-sky-600 font-black text-5xl capitalize">Confirma tu cuenta y comienza a crear tus <span className="text-slate-700"> proyectos </span> 
        </h1>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            
            {msg && <Alerta alerta={alerta} />}

            { cuentaConfirmada && 
                <Link 
                    className="block text-center text-slate-500 uppercase text-xs"
                    to="/">
                    Inicia sesión
                </Link>
            }
        </div>
    </>
  )
}
