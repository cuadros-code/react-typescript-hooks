import { useState } from "react"

export const useForm = <T extends Object>( initialState: T ) => {
  
  const [form, setForm] = useState(initialState)

  // keyof una llave del objeto de entrada
  const onChange = ( value: string, campo: keyof T ) => {
    setForm({
      ...form,
      [campo]: value
    })
  }

  return { 
    form,
    onChange
  }
}
