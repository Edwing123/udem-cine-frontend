import { Select } from '@components/controls'
import { Cell, Row } from '@components/table'
import { movies, rooms, schedules } from './data.json'

export const columnsWidth = {
    movieWidth: '30%',
    scheduleWidth: '15%',
    roomWidth: '12%',
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

export const movieOptions = movies.map(({ id, title }) => {
    return (
        <Select.Item value={id.toString()} key={id}>
            <Select.ItemText>{title}</Select.ItemText>
        </Select.Item>
    )
})

export const scheduleOptions = schedules.map(({ id, name }) => {
    return (
        <Select.Item value={id.toString()} key={id}>
            <Select.ItemText>{name}</Select.ItemText>
        </Select.Item>
    )
})

export const roomOptions = rooms.map(({ number }) => {
    return (
        <Select.Item value={number.toString()} key={number}>
            <Select.ItemText>{number}</Select.ItemText>
        </Select.Item>
    )
})
