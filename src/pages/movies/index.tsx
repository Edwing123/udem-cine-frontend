import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import {
    Table,
    Row,
    Cell,
    Add as AddButton,
    OptionsMenu
} from '@components/table'
import { styled } from '@config/stitches.config'
import testMovies from './testMovies.json'

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

const TestMovies = () => {
    return (
        <>
            {testMovies.map(
                ({
                    title,
                    id,
                    clasification,
                    duration,
                    genre,
                    releaseDate
                }) => {
                    return (
                        <Row key={id}>
                            <Cell width={titleWidth} type='text'>
                                {title}
                            </Cell>

                            <Cell width={clasificationWidth} type='text'>
                                {clasification}
                            </Cell>
                            <Cell width={genreWidth} type='text'>
                                {genre}
                            </Cell>
                            <Cell width={durationWidth} type='text'>
                                {duration}
                            </Cell>
                            <Cell width={releaseDateWidth} type='text'>
                                {releaseDate}
                            </Cell>
                            <OptionsMenu title='Opciones' />
                        </Row>
                    )
                }
            )}
        </>
    )
}

const Divider = styled('div', {
    display: 'flex',
    gap: '$40'
})

const Movies = () => {
    const navigateTo = useNavigate()

    const goToCreateMovie = () => {
        navigateTo('/movies/create')
    }

    return (
        <>
            <PageTitle>Gestion de peliculas</PageTitle>

            <Divider>
                <Table>
                    <TableHeaders />
                    <TestMovies />
                </Table>

                <AddButton title='Agregar pelicula' onClick={goToCreateMovie} />
            </Divider>
        </>
    )
}

export default Movies
