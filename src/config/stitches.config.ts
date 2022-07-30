import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
    media: {},
    theme: {
        colors: {
            black1: '#00092C',
            black2: '#333a56',
            blackTransparent1: 'hsla(228, 100%, 9%, 0.4)',

            white1: '#ffffff',
            white2: '#eeeeee',
            whiteTransparent1: 'hsla(0, 0%, 95%, 0.7)',

            green1: '#00b488',
            green2: '#17B978',

            purple1: '#574b90',

            red1: '#ff304f',
            red2: '#ff1f5a',

            blue1: '#482ff7',
            darkBlue1: '#1F4287'
        },

        fonts: {
            titillium: 'Titillium web'
        },

        fontSizes: {
            root: '62.50%'
        },

        fontWeights: {
            normal: 400,
            semibold: 600,
            bold: 700
        },

        lineHeights: {
            medium: 1.5
        },

        shadows: {},

        radii: {},

        space: {},

        sizes: {}
    }
})

export const globalStyles = globalCss({
    '*, *::before, *::after': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    ':root': {
        fontSize: '$root',
        fontFamily: '$titillium',
        lineHeight: '$medium'
    },

    'a, input, button, textarea': {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        color: 'inherit',
        textDecoration: 'none'
    }
})
