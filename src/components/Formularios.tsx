import { useForm } from "../hooks/useForm"

const Formularios = () => {

  const { form, onChange } = useForm({
    email:'',
    password:'',
  })
  
  return (
    <>
    <h3>Formularios</h3>
    <input 
      type="text"
      className="form-control mb-3"
      placeholder="Email"
      name="email"
      value={form.email}
      onChange={ ({target}) => onChange(target.value, 'email') }
    />      
    <input 
      type="text"
      className="form-control mb-3"
      placeholder="Password"
      name="password"
      value={form.password}
      onChange={ ({target}) => onChange(target.value, 'password') }

    />

    <code>
      <pre>
        {
          JSON.stringify(form, null,2)
        }
      </pre>
    </code>
    </>
  )
}

export default Formularios
