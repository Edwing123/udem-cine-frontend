import { useNavigate, useParams } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import Button from '@components/Button'
import { styled } from '@config/stitches.config'

const {
    titleWidth,
    clasificationWidth,
    genreWidth,
    durationWidth,
    releaseDateWidth
} = {
    titleWidth: '30%',
    clasificationWidth: '15%',
    genreWidth: '12%',
    durationWidth: '10%',
    releaseDateWidth: '33%'
}

const TableHeaders = () => {
    return (
        <Row>
            <Cell type='header' width={titleWidth}>
                Titulo
            </Cell>
            <Cell type='header' width={clasificationWidth}>
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

const ActionsButtons = styled('div', {
    marginTop: '$20',
    display: 'flex',
    gap: '$16'
})

const Edit = () => {
    const { movie_id } = useParams<{ movie_id: string }>()
    const navigateTo = useNavigate()

    return (
        <>
            <PageTitle>Editar pelicula (id={movie_id!})</PageTitle>

            <Table>
                <TableHeaders />
                <Row>
                    <Cell width={titleWidth} type='text'>
                        ...
                    </Cell>

                    <Cell width={clasificationWidth} type='text'>
                        ...
                    </Cell>
                    <Cell width={genreWidth} type='text'>
                        ...
                    </Cell>
                    <Cell width={durationWidth} type='text'>
                        ...
                    </Cell>
                    <Cell width={releaseDateWidth} type='text'>
                        ...
                    </Cell>
                </Row>
            </Table>

            <ActionsButtons>
                <Button type='success'>Guardar</Button>
                <Button onClick={() => navigateTo('/movies')} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Edit
