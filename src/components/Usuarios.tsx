import { useUsuarios } from "../hooks/useUsuarios"

const Usuarios = () => {

  const { user, paginaSiguiente , paginaAnterior } = useUsuarios()  
  

  return (
    <>
      <h3>Usuarios</h3>

      <table className="table" >
        <thead>
            <tr>
              <th>Avatar</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
        </thead>
        <tbody>
        {
          user?.map( (user) => (
            <tr key={user.id} >
              <td> <img src={user.avatar} style={{width: 40}} alt=""/> </td>
              <th> {user.first_name}</th>
              <th> {user.email} </th>
            </tr>
          ))
        }
        </tbody>
      </table>
      <button 
        className="btn btn-primary"
        onClick={ () => paginaAnterior()}
      >
        {'<< '}Anterior
      </button>
      &nbsp; 
      <button 
        className="btn btn-primary"
        onClick={ () => paginaSiguiente()}
      >
        Siguientes{' >>'}
      </button>
      
    </>
  )
}

export default Usuarios
