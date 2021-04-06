import { useState } from "react"

const useContador = (init: number = 0) => {

  const [contador, setContador] = useState(init)

  const handleAdd = (suma: number) => setContador( contador + suma )

  const handleSub = (resta: number) => setContador( contador - resta )


  return { 
    contador,
    handleAdd,
    handleSub
  }
  
}

export default useContador
