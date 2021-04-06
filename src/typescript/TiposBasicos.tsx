
const TiposBasicos = () => {

  let nombre : string = 'kevin'
  let edad : number = 3
  let array : string[] = ['hola', 'como', 'estas']
  let estaActivo : Boolean = true;


  return (
    <>
      <h3>Tipos Basicos</h3>
      <hr/>
      {nombre},
      <hr/>
      {edad},
      <hr/>
      {array.map( (item, i) => <p key={i}>{item}</p> )}
      <hr/>
      {estaActivo ? 'activo' : 'no activo'}
    </>
  )
}

export default TiposBasicos
