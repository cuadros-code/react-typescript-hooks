import useContador from "../hooks/useContador"

const ContadorConHook = () => {

   const { contador, handleAdd, handleSub } = useContador(10)
  
  return (
    <>
      <h3>Contador Hook: <small>{contador}</small> </h3>

      <button
      className="btn btn-primary"
      onClick={() => handleAdd(1)}
      >
        + 1
      </button>
      &nbsp;
      <button
      className="btn btn-primary"
      onClick={() => handleSub(1)}
      >
        - 1
      </button>

    </>
  )
}

export default ContadorConHook
