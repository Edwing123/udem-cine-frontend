import { ChangeEvent, useState } from 'react'
import { styled } from '@config/stitches.config'
import Input from './Input'
import userIcon from '@assets/icons/user.svg'
import keyIcon from '@assets/icons/key.svg'
import type { Credentails } from '@typ/data'

const StyledForm = styled('form', {
    width: '90%',
    maxWidth: '30rem',
    margin: '0 auto'
})

const ButtonContainer = styled('div', {
    textAlign: 'center',
    marginTop: '4rem'
})

const Button = styled('button', {
    display: 'inline-block',
    padding: '1rem 5rem',

    cursor: 'pointer',
    fontSize: '2rem',
    fontWeight: '$bold',
    border: 'none',
    borderRadius: '8px',
    color: '$loginButtonTextColor',
    backgroundColor: '$loginButtonBgColor'
})

const Form = () => {
    const [credentials, setCredentails] = useState<Credentails>({
        username: '',
        password: ''
    })

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentails((c) => ({ ...c, username: e.target.value }))
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentails((c) => ({ ...c, password: e.target.value }))
    }

    return (
        <StyledForm onSubmit={(e) => e.preventDefault()}>
            <Input
                type='text'
                placeholder='Nombre de usuario'
                icon={userIcon}
                value={credentials.username}
                onChange={handleUsernameChange}
            />

            <Input
                type='password'
                placeholder='Contraseña'
                icon={keyIcon}
                value={credentials.password}
                onChange={handlePasswordChange}
            />

            <ButtonContainer>
                <Button>Ingresar</Button>
            </ButtonContainer>
        </StyledForm>
    )
}

export default Form
