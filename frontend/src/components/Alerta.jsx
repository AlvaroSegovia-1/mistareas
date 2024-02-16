/* eslint-disable react/prop-types */

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-300 to-red-600' :'from-sky-300  to-sky-600' } bg-gradient-to-br text-center p-2 rounded-xl text-white mb-6 `}>
        {alerta.msg}
    </div>
  )
}

export default Alerta