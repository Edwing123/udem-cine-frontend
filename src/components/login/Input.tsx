import { ChangeEvent, FC, useId } from 'react'
import { styled } from '@config/stitches.config'

const Container = styled('div', {
    display: 'flex',
    marginBottom: '$20',

    borderRadius: '$md',
    overflow: 'hidden'
})

const IconContainer = styled('label', {
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
    padding: '$8 $16',

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
    const id = useId()

    return (
        <Container>
            <IconContainer htmlFor={id} aria-label={placeholder}>
                <Icon src={icon} aria-hidden />
            </IconContainer>
            <StyledInput
                id={id}
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
