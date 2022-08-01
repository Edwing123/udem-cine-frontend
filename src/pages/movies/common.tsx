import { Select } from '@components/controls'
import { Cell, Row } from '@components/table'
import { classifications } from './data.json'

const {
    titleWidth,
    classificationWidth,
    genreWidth,
    durationWidth,
    releaseDateWidth
} = {
    titleWidth: '30%',
    classificationWidth: '15%',
    genreWidth: '12%',
    durationWidth: '10%',
    releaseDateWidth: '33%'
}

export const columnsWidth = {
    titleWidth,
    classificationWidth,
    genreWidth,
    durationWidth,
    releaseDateWidth
}

export const TableHeaders = () => {
    return (
        <Row>
            <Cell type='header' width={titleWidth}>
                Titulo
            </Cell>
            <Cell type='header' width={classificationWidth}>
                Clasificacion
            </Cell>
            <Cell type='header' width={genreWidth}>
                Genero
            </Cell>
            <Cell type='header' width={durationWidth}>
                Duracion
            </Cell>
            <Cell type='header' width={releaseDateWidth}>
                Fecha de lanzamiento
            </Cell>
        </Row>
    )
}

export const classificationOptions = classifications.map((classification) => {
    return (
        <Select.Item value={classification} key={classification}>
            <Select.ItemText>{classification}</Select.ItemText>
        </Select.Item>
    )
})
