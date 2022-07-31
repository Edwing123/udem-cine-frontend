import { styled } from '@config/stitches.config'

const Button = styled('button', {
    display: 'inline-block',
    padding: '$8 $16',

    cursor: 'pointer',
    userSelect: 'none',
    border: 'none',
    fontSize: '$sm',
    borderRadius: '$sm',
    backgroundColor: '$$bgColor',
    fontWeight: '$bold',

    '&:focus': {
        outline: 'none'
    },

    variants: {
        type: {
            success: {
                $$bgColor: '$colors$green3',
                color: '$white1'
            },
            danger: {
                $$bgColor: '$colors$red3',
                color: '$white1'
            }
        }
    }
})

export default Button
