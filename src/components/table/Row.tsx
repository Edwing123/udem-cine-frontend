import { styled } from '@config/stitches.config'

const StyledRow = styled('div', {
    position: 'relative',
    display: 'flex',
    gap: '$12',
    padding: '$12 $20',
    marginBottom: '$4',

    backgroundColor: '$tableRowBgColor',
    borderRadius: '$xsm'
})

export default StyledRow
