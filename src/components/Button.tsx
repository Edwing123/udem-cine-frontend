import { styled } from '@config/stitches.config'

const Button = styled('button', {
    display: 'inline-block',
    padding: '$8 $16',

    cursor: 'pointer',
    userSelect: 'none',
    border: 'none',
    fontSize: '$sm',
    borderRadius: '$sm',

    '&:focus': {
        outline: 'none'
    }
})

export default Button
