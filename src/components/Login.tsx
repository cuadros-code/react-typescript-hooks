import { useEffect, useReducer } from "react"

interface AuthState { 
    validando: Boolean,
    token: string | null,
    username: string | null,
    nombre: string | null,
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: null,
    nombre: null,
}

type LoginPayload = {
    username: string,
    nombre: string
}

type AuthAction = 
  | {type: 'logout'} 
  | {type: 'logint', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction ): AuthState => {

    switch (action.type) {
      case 'logout':
        return { 
         ...state,
         validando: false,
         token: null,
         username: null, 
         nombre: null,
        }
      case 'logint':
        return { 
         ...state,
         token: 'LEcin@12kaohadj',
         username: action.payload.username,
         nombre: action.payload.nombre
        }
      default:
        return state
    }

}

const Login = () => {

  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type : 'logout',
      })
    }, 1500);
  }, [])

  if( state.validando ){
    return (
      <div className="alert alert-info">
        Validando...
      </div>   
    )
  }

  const handleLogint = () => {
    dispatch({
      type : "logint",
      payload: {
        nombre: 'Kevin',
        username: 'kevincuadros'
      }
    })
  }

  const handleLogout = () => {
    dispatch({
      type: 'logout'
    })
  }
  
  

  return (
    <>
      <h3>Login</h3>

      {
        state.token
        ?
        <>
          <div className="alert alert-success">Accediendo como {state.nombre}</div>
          <button
            className="btn btn-danger"
            onClick={ handleLogout }
          >
            LogOut
          </button>
       </>
        :
        <>
          <div className="alert alert-danger">No Valido...</div>
          <button
            className="btn btn-primary"
            onClick={ handleLogint }
          >
            Login
          </button>
        </>
      }
         

      
      
      

    </>
  )
}

export default Login
