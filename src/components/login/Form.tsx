import { ChangeEvent, useState } from 'react'
import { styled } from '@config/stitches.config'
import Input from './Input'
import { forms as formsIcon } from '@assets/icons'
import type { Credentails } from '@typ/data'

const StyledForm = styled('form', {
    width: '90%',
    maxWidth: '30rem',
    margin: '0 auto'
})

const ButtonContainer = styled('div', {
    textAlign: 'center',
    marginTop: '$40'
})

const Button = styled('button', {
    display: 'inline-block',
    padding: '$12 $44',

    userSelect: 'none',
    cursor: 'pointer',
    fontSize: '$md',
    fontWeight: '$bold',
    border: 'none',
    borderRadius: '$md',
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
                icon={formsIcon.user}
                value={credentials.username}
                onChange={handleUsernameChange}
            />

            <Input
                type='password'
                placeholder='Contraseña'
                icon={formsIcon.key}
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
