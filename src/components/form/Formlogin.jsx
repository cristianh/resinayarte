
import { useForm } from './useForm'
import './App.css'

export const Formlogin = () => {

    const {
        onBlurInput,
        onInputValue,
        onEnviar,
        onReset,
        userError,
        user,
        password,
        passwordError
        } = useForm({
            user:"",
            password:""
        })


    return (
        <>
            <div className="container container-login   shadow p-3 mb-5 bg-body rounded">
                <form onSubmit={onEnviar}>
                    <div className="d-flex just flex-column justify-content-evenly gap-3" >
                        <label htmlFor="user" className="form-label">Usuario</label>
                        <input
                            autoComplete="false"
                            autoCorrect="false"
                            type="text"
                            name="user"
                            id="Inputuser"
                            value={user}
                            onChange={onInputValue}
                            className={userError?'form-control': 'form-control was-validated'}
                            placeholder="Usuario"
                            aria-describedby="helpId"
                            onBlur={onBlurInput}
                        />{ userError && <div style={{"color":"red"}}>{userError}</div>}
                        
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="Inputpassword"
                            value={password}
                            onChange={onInputValue}
                            className="form-control"
                            placeholder="Password"
                            aria-describedby="password"
                            onBlur={onBlurInput}
                        />
                        { passwordError && <div style={{"color":"red"}}>{passwordError}</div>}
                        <input type="submit" className="btn btn-primary" value="Enviar"/>
                        <input type="button" onClick={onReset} className="btn btn-success" value="Limpiar"/>
                    </div>
                </form>
                
                <small id="helpId" className="text-muted">Help text</small>
            </div>
        </>
    )
}
