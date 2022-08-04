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
    transition: 'all 100ms linear',

    '&:is(:hover, :focus-visible)': {
        outline: 'none',
        backgroundColor: '$$onHoverBgColor'
    },

    '&[disabled]': {
        cursor: 'not-allowed',
        background: '$white5'
    },

    variants: {
        type: {
            success: {
                $$bgColor: '$colors$buttonSucessBgColor',
                $$onHoverBgColor: '$colors$buttonSucessOnHoverBgColor',
                color: '$white1'
            },
            danger: {
                $$bgColor: '$colors$buttonDangerBgColor',
                $$onHoverBgColor: '$colors$buttonDangerOnHoverBgColor',
                color: '$white1'
            }
        }
    }
})

export default Button
