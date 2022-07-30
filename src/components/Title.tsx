import { styled } from '@config/stitches.config'

const Title = styled('h1', {
    fontSize: '$$fontSize',

    variants: {
        size: {
            1: {
                $$fontSize: '2.5rem'
            },

            2: {
                $$fontSize: '3.5rem'
            }
        }
    }
})

export default Title
