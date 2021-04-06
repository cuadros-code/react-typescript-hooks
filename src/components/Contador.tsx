import { useState } from "react"

const Contador = () => {

  const [contador, setContador] = useState<number>(0)

  const handleAdd = () => setContador( contador + 1)

  const handleSub = () => setContador( contador - 1 )
  
  return (
    <>
      <h3>Contador: <small>{contador}</small> </h3>

      <button
      className="btn btn-primary"
      onClick={handleAdd}
      >
        + 1
      </button>
      &nbsp;
      <button
      className="btn btn-primary"
      onClick={handleSub}
      >
        - 1
      </button>

    </>
  )
}

export default Contador
