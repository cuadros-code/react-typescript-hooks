import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResUsuarios, Usuario } from "../interfaces/userInterface"

export const useUsuarios = () => {
  const [user, setUser] = useState<Usuario[] | null>(null)

  const paginaRef = useRef(1)

  useEffect(() => {
    cargarUsuario()
  }, [])

  const cargarUsuario = async () => {
    try {
      const res = await reqResApi.get<ReqResUsuarios>(`/users`, {
        params:{
          page: paginaRef.current
        }
      })
        setUser(res.data.data)
    } catch (error) {
      setUser(null) 
    }
  }

  const paginaSiguiente = () => {
    if (paginaRef.current  >= 2) {
      return null
    }
    paginaRef.current++
    cargarUsuario()
  }

  const paginaAnterior = () => {

    if (paginaRef.current <= 1) {
      return null
    }
    paginaRef.current--
    cargarUsuario()

  }
  
  return { 
    user,
    paginaSiguiente,
    paginaAnterior
  }

}
