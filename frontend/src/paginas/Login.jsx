import { Link } from "react-router-dom"

export const Login = () => {
  return (
   <>
        <h1 className="text-sky-600 font-black text-5xl capitalize">Inicia sesión   y administra tus 
            <span className="text-slate-700"> proyectos </span> 
        </h1>

        <form className="my-8 bg-white shadow rounded-lg p-10">
            <div>
                <label
                     className="uppercase text-gray-600 block text-xl font-bold "
                     htmlFor="email"
                     >Email</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="email de registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-100 " />
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
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-100 " />
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
