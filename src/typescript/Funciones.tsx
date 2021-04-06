
const Funciones = () => {

  const sumar = (a: number, b: number): number => {
    return a + b
  }

  return (
    <>
      <h3>Funciones</h3>

      suma es { sumar(6,2) }
    </>
  )
}

export default Funciones
