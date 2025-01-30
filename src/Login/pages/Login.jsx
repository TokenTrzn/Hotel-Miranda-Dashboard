import { useState } from 'react'
import { InputStyled } from "../components/UI/InputStyled"
import { FormStyled } from "../components/UI/FormStyled"
import { ButtonStyled } from "../components/UI/ButtonStyled"
import { useNavigate } from "react-router-dom"
import { CredentialsStyled } from '../components/UI/CredentialsStyled'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const { dispatch } = useContext(AuthContext);

    const EMAIL = 'a@gmail.com'
    const PASS = '1234'

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        if (email === EMAIL && password == PASS) {
            localStorage.setItem("isAuthenticated", "true");
            navigate('/dashboard')
        } else {
            alert('Error')
        }
    }

    return (
        <FormStyled onSubmit={handleLogin}>
            <h1>Iniciar Sesión</h1>
            <label>Correo Electrónico</label>
            <InputStyled type='email' value={email} onChange={(e) => setEmail(e.target.value)} data-cy='emailInput' />
            <label>Contraseña</label>
            <InputStyled type='password' value={password} onChange={(e) => setPassword(e.target.value)} data-cy='passwordInput' />
            <ButtonStyled data-cy='submitButton' >Iniciar Sesión</ButtonStyled>
            <CredentialsStyled>Correo: a@gmail.com</CredentialsStyled>
            <CredentialsStyled>Contraseña: 1234</CredentialsStyled>
        </FormStyled>
    )
}