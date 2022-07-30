import { styled } from '@config/stitches.config'

const Title = styled('h1', {
    fontSize: '$$fontSize',

    variants: {
        size: {
            1: {
                $$fontSize: '$fontSizes$lg'
            },

            2: {
                $$fontSize: '$fontSizes$xlg'
            }
        }
    }
})

export default Title
