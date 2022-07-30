import type { ChangeEvent, FC } from 'react'
import { styled } from '@config/stitches.config'

const Container = styled('div', {
    display: 'flex',
    marginBottom: '2rem',

    borderRadius: '$md',
    overflow: 'hidden'
})

const IconContainer = styled('span', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    aspectRatio: '1/1',

    backgroundColor: '$loginIconBgColor'
})

const Icon = styled('img', {
    width: '50%'
})

const StyledInput = styled('input', {
    width: '100%',
    padding: '0.8rem 1.4rem',

    border: 'none',
    fontWeight: '$bold',
    fontSize: '$md',
    color: '$loginInputTextColor',
    backgroundColor: '$loginInputBgColor',

    '&:placeholder': {
        color: '$loginPlaceholderTextColor'
    },

    '&:focus': {
        outline: 'none'
    }
})

type Props = {
    type?: 'text' | 'password'
    placeholder: string
    icon: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = ({ type = 'text', placeholder, icon, onChange }) => {
    return (
        <Container>
            <IconContainer>
                <Icon src={icon} aria-hidden />
            </IconContainer>
            <StyledInput
                autoComplete='off'
                spellCheck='false'
                onChange={onChange}
                type={type}
                placeholder={placeholder}
            />
        </Container>
    )
}

export default Input
