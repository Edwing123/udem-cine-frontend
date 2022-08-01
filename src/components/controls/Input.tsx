import { styled } from '@config/stitches.config'
import type { ChangeEvent, FC, InputHTMLAttributes } from 'react'

const StyledInput = styled('input', {
    display: 'block',
    width: '100%',

    border: 'none',
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$tableDataTextColor',

    '&::placeholder': {
        fontWeight: '$semibold',
        color: '$inputPlaceholderTextColor'
    },

    '&:is(:hover, :focus-visible)': {
        outline: 'none'
    }
})

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = ({ onChange, ...props }) => {
    return <StyledInput onChange={onChange} {...props}></StyledInput>
}

export default Input
