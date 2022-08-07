import { ChangeEvent, useEffect, useState } from 'react'
import { styled } from '@config/stitches.config'
import Input from './Input'
import { forms as formsIcons } from '@assets/icons'
import type { Credentials } from '@typ/data'
import { login, isLoggedInStore, getUserDetails, userStore } from '@store/user'
import { useStore } from '@nanostores/react'
import { useNavigate } from 'react-router-dom'

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
    backgroundColor: '$loginButtonBgColor',

    '&[disabled]': {
        backgroundColor: '$white5',
        cursor: 'not-allowed'
    }
})

const Form = () => {
    const goTo = useNavigate()

    const isLoggedIn = useStore(isLoggedInStore)

    const [{ userName, password }, setCredentails] = useState<Credentials>({
        userName: '',
        password: ''
    })

    const isButtonDisabled = userName.length === 0 || password.length === 0

    const goToHome = () => {
        goTo('/')
    }

    const handleOnClick = () => {
        login({ userName, password })
            .then((res) => {
                if (!res.ok) {
                    alert('Las credenciales no son correctas')
                    return
                }

                getUserDetails(res.data.id).then(() => {
                    goToHome()
                })
            })
            .catch(() => {})
    }

    useEffect(() => {
        if (isLoggedIn) {
            goToHome()
        }
    }, [])

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentails((c) => ({ ...c, userName: e.target.value }))
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentails((c) => ({ ...c, password: e.target.value }))
    }

    return (
        <StyledForm onSubmit={(e) => e.preventDefault()}>
            <Input
                type='text'
                placeholder='Nombre de usuario'
                icon={formsIcons.user}
                value={userName}
                onChange={handleUsernameChange}
            />

            <Input
                type='password'
                placeholder='Contraseña'
                icon={formsIcons.key}
                value={password}
                onChange={handlePasswordChange}
            />

            <ButtonContainer>
                <Button onClick={handleOnClick} disabled={isButtonDisabled}>
                    Ingresar
                </Button>
            </ButtonContainer>
        </StyledForm>
    )
}

export default Form
