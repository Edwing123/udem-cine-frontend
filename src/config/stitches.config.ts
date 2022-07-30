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
            darkBlue1: '#1F4287',

            // Login page specific tokens.
            loginHeaderBgColor: '$black1',
            loginLogoTextColor: '$white1',
            loginBigTitleTextColor: '$white1',
            loginBgColor: '$purple1',
            loginIconBgColor: '$black1',
            loginPlaceholderTextColor: '$blackTransparent1',
            loginInputBgColor: '$whiteTransparent1',
            loginInputTextColor: '$black1',
            loginButtonBgColor: '$green1',
            loginButtonTextColor: '$white1',

            // Sidebar specific tokens.
            sidebarTitleTextColor: '$purple1',
            sidebarUsernameTextColor: '$black2',
            sidebarSeparatorBgColor: '$black2',
            sidebarBgColor: '$white1',
            sidebarLogoutButtonTextColor: '$white1',
            sidebarLogoutButtonBgColor: '$red1',

            // Home page specific tokens.
            homeBgColor: '$white2'
        },

        fonts: {
            titillium: 'Titillium web'
        },

        fontSizes: {
            root: '62.50%',
            sm: '1.7rem',
            md: '2.1rem',
            lg: '2.5rem',
            xlg: '3.5rem'
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

        radii: {
            sm: '4px',
            md: '10px',
            lg: '18px'
        },

        space: {
            1: '0.1rem',
            4: '0.4rem',
            8: '0.8rem',
            12: '1.2rem',
            16: '1.6rem',
            20: '2rem',
            24: '2.4rem',
            28: '2.8rem',
            32: '3.2rem',
            36: '3.6rem',
            40: '4rem',
            44: '4.4rem',
            48: '4.8rem',
            52: '5.2rem'
        },

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
