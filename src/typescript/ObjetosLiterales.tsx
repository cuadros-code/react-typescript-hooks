
interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion
}
interface Direccion {
  pais: string,
  No: number
}


const ObjetosLiterales = () => {

  const persona: Persona = {
    nombre: 'Kevin',
    edad: 21,
    direccion:{
      pais: 'Colombia',
      No: 1323
    }
  }  

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  )
}

export default ObjetosLiterales
