import { Cell, Row } from '@components/table'

export const columnsWidth = {
    nameWidth: '18%',
    timeWidth: '15%'
}

const { nameWidth, timeWidth } = columnsWidth

export const TableHeaders = () => {
    return (
        <Row>
            <Cell type='header' width={nameWidth}>
                Nombre
            </Cell>
            <Cell type='header' width={timeWidth}>
                Hora
            </Cell>
        </Row>
    )
}
