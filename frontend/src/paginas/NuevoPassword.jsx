// import { Link } from "react-router-dom"

const NuevoPassword = () => {
  return (
    <>
    <h1 className="text-sky-600 font-black text-5xl capitalize">Reestablece tu password y no pierdas acceso a tus<span className="text-slate-700"> proyectos </span> 
    </h1>

    <form className="my-8 bg-white shadow rounded-lg p-10">
               
        <div className="mt-4">
            <label
                 className="uppercase text-gray-600 block text-xl font-bold "
                 htmlFor="password"
                 >Nuevo Password</label>
            <input 
                type="password"
                id="password"
                placeholder="Escribe tu nuevo password"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 " />
        </div>

        <input
             type="submit"
             value="Guardar nuevo password"
             className="bg-sky-600 w-full py-3 mt-5 mb-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-900 transition-colors " />    
    </form>    
</>
  )
}

export default NuevoPassword
