import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import {
    Table,
    Row,
    Cell,
    Add as AddButton,
    OptionsMenu
} from '@components/table'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import type { Movie } from '@typ/data'
import { TableHeaders, columnsWidth } from './common'
import Divider from '@components/pages/Divider'
import * as pagesUtils from '@utils/pages'
import { codes, MoviesAPI } from '@api'

const {
    titleWidth,
    classificationWidth,
    genreWidth,
    durationWidth,
    releaseDateWidth
} = columnsWidth

type MoviesRowsProps = {
    movies: Movie[]
    onEdit: (id: number) => () => void
    onDelete: (id: number) => () => void
}

const MoviesRows: FC<MoviesRowsProps> = ({ movies, onEdit, onDelete }) => {
    return (
        <>
            {movies.map(
                ({
                    id,
                    title,
                    classification,
                    duration,
                    genre,
                    releaseDate
                }) => {
                    return (
                        <Row key={id}>
                            <Cell width={titleWidth} type='text'>
                                {title}
                            </Cell>

                            <Cell width={classificationWidth} type='text'>
                                {classification}
                            </Cell>
                            <Cell width={genreWidth} type='text'>
                                {genre}
                            </Cell>
                            <Cell width={durationWidth} type='text'>
                                {pagesUtils.prettifyDuration(duration)}
                            </Cell>
                            <Cell width={releaseDateWidth} type='text'>
                                {releaseDate}
                            </Cell>
                            <OptionsMenu
                                title='Opciones'
                                onEdit={onEdit(id)}
                                onDelete={onDelete(id)}
                            />
                        </Row>
                    )
                }
            )}
        </>
    )
}

const Movies = () => {
    const navigateTo = useNavigate()

    const [movies, setMovies] = useState<Movie[]>([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        MoviesAPI.list().then((res) => {
            if (!res.ok) return
            setMovies(res.data)
        })
    }, [reload])

    const goToCreateMovie = () => {
        navigateTo('/movies/create')
    }

    const onEdit = pagesUtils.id((id: number) => {
        navigateTo(`/movies/edit/${id}`)
    })

    const onDelete = pagesUtils.id((id: number) => {
        const yes = confirm('Eliminar pelicula?')

        if (!yes) {
            return
        }

        MoviesAPI.delete(id).then((res) => {
            if (!res.ok) {
                if (res.code == codes.FUNCTION_DEPENDS_ON_MOVIE) {
                    alert(
                        'No puedes eliminar esta pelicula porque una o mas funciones dependen de ella'
                    )
                }

                return
            }
            setReload((v) => !v)
        })
    })

    return (
        <>
            <PageTitle>Gestion de peliculas</PageTitle>

            <Divider>
                <Table>
                    <TableHeaders />
                    <MoviesRows
                        movies={movies}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Table>

                <AddButton title='Agregar pelicula' onClick={goToCreateMovie} />
            </Divider>
        </>
    )
}

export default Movies
