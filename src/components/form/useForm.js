import { useState } from 'react'

export const useForm = (initialForm) =>{

    const [form, setForm] = useState(initialForm)

    const [erros, setErros] = useState({
        userError:"",
        passwordError:""
    })

    const {user,password} = form


    const onInputValue= ({target})=>{

        const {name,value}  = target

        setForm({
            ...form,
            [ name ]: value
        })
    }

    const onReset = () =>{
        setForm(initialForm)
    }

    const onEnviar = (event) =>{
        event.preventDefault()
        if(!user.trim()) {
            setErros({
                passwordError:"",
                userError:"El campo usuario es requerido",
            })
            return
        }



        if(!password.trim()) {
            setErros({
                userError:"",
                passwordError:"El campo password es requerido",
            })
            return
        }

       

        setErros({
            userError:"",
            passwordError:""
        })

        
        
    }

    const onBlurInput = () =>{
        if(user.length<=6) {
            console.log({"cambia user":user})
            setErros({
                passwordError:"",
                userError:"El campo usuario requieres 6 caracteres",
            })
            return
        }

        if(password.length<=6) {
            console.log({"cambia password":password})
            setErros({
                passwordError:"El campo password requieres 6 caracteres",
                userError:"",
            })
            return
        }

        setErros({
            userError:"",
            passwordError:""
        })
        
    }

    

    return {
        onBlurInput,
        onInputValue,
        onEnviar,
        onReset,
        ...form,
        form,
        ...erros,
        erros
    }
}