import { Select } from '@components/controls'
import { Cell, Row } from '@components/table'

export const columnsWidth = {
    movieWidth: '20%',
    scheduleWidth: '12%',
    roomWidth: '6%',
    priceWidth: '10%',
    createdAtWidth: '33%'
}

const { movieWidth, scheduleWidth, roomWidth, priceWidth, createdAtWidth } =
    columnsWidth

export const TableHeaders = () => {
    return (
        <Row>
            <Cell type='header' width={movieWidth}>
                Pelicula
            </Cell>
            <Cell type='header' width={scheduleWidth}>
                Horario
            </Cell>
            <Cell type='header' width={roomWidth}>
                Sala
            </Cell>
            <Cell type='header' width={priceWidth}>
                Precio
            </Cell>
        </Row>
    )
}
