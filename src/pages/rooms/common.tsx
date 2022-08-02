import { Cell, Row } from '@components/table'

export const columnsWidth = {
    numberWidth: '20%',
    seatsWidth: '20%'
}

const { numberWidth, seatsWidth } = columnsWidth

export const TableHeaders = () => {
    return (
        <Row>
            <Cell type='header' width={numberWidth}>
                Numero
            </Cell>
            <Cell type='header' width={seatsWidth}>
                Numero de asientos
            </Cell>
        </Row>
    )
}
