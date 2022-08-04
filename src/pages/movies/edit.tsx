import { useNavigate, useParams } from 'react-router-dom'
import type { ChangeEvent } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import Button from '@components/Button'
import { UpdateMovie, Movie } from '@typ/data'
import { Input, Select } from '@components/controls'
import ActionsButtons from '@components/pages/ActionsButtons'
import { TableHeaders, classificationOptions, columnsWidth } from './common'
import { MoviesAPI } from '@api'

const {
    titleWidth,
    classificationWidth,
    genreWidth,
    durationWidth,
    releaseDateWidth
} = columnsWidth

const Edit = () => {
    const { movie_id } = useParams<{ movie_id: string }>()
    const navigateTo = useNavigate()

    const currentValues = useRef<Movie>({
        id: 0,
        title: '',
        classification: '',
        duration: 0,
        genre: '',
        releaseDate: ''
    })

    const goToMovies = () => {
        navigateTo('/movies')
    }

    const [isEditing, setIsEditing] = useState(false)

    const [{ title, classification, genre, duration, releaseDate }, setState] =
        useState<UpdateMovie>({
            title: '',
            classification: '',
            genre: '',
            duration: 0,
            releaseDate: ''
        })

    const isButtonDisabled =
        title.length === 0 ||
        classification.length === 0 ||
        genre.length === 0 ||
        duration < 0 ||
        releaseDate.length === 0 ||
        (currentValues.current.title == title &&
            currentValues.current.classification == classification &&
            currentValues.current.genre == genre &&
            currentValues.current.duration == duration &&
            currentValues.current.releaseDate == releaseDate) ||
        isEditing

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value =
            name === 'duration' ? e.target.valueAsNumber : e.target.value

        setState((s) => ({ ...s, [name]: value }))
    }

    const handleClasificationChange = (v: string) => {
        setState((s) => ({ ...s, classification: v }))
    }

    const handleOnSave = () => {
        setIsEditing(true)

        MoviesAPI.edit(currentValues.current.id, {
            title,
            classification,
            genre,
            duration,
            releaseDate
        })
            .then(({ ok, ...props }) => {
                if (!ok && 'reason' in props) {
                    alert(props.reason)
                    return
                }

                goToMovies()
            })
            .finally(() => {
                setIsEditing(false)
            })
    }

    useEffect(() => {
        MoviesAPI.get(Number(movie_id)).then((movie) => {
            currentValues.current.id = movie.id
            currentValues.current.title = movie.title
            currentValues.current.classification = movie.classification
            currentValues.current.genre = movie.genre
            currentValues.current.duration = movie.duration
            currentValues.current.releaseDate = movie.releaseDate
            setState(() => ({ ...movie }))
        })
    }, [])

    return (
        <>
            <PageTitle>
                Editar pelicula ({currentValues.current.title})
            </PageTitle>

            <Table>
                <TableHeaders />

                <Row>
                    <Cell width={titleWidth} type='text'>
                        <Input
                            type='text'
                            placeholder='Titulo de la pelicula'
                            spellCheck='false'
                            autoComplete='off'
                            value={title}
                            name='title'
                            onChange={handleInputChange}
                        />
                    </Cell>

                    <Cell width={classificationWidth}>
                        <Select.Container
                            onChange={handleClasificationChange}
                            value={classification}
                            label='Selecciona una clasificacion'
                        >
                            {classificationOptions}
                        </Select.Container>
                    </Cell>

                    <Cell width={genreWidth} type='text'>
                        <Input
                            type='text'
                            placeholder='Genero'
                            autoComplete='off'
                            spellCheck='false'
                            name='genre'
                            value={genre}
                            onChange={handleInputChange}
                        />
                    </Cell>

                    <Cell width={durationWidth} type='text'>
                        <Input
                            type='number'
                            inputMode='numeric'
                            placeholder='Duracion'
                            spellCheck='false'
                            value={duration}
                            name='duration'
                            onChange={handleInputChange}
                        />
                    </Cell>

                    <Cell width={releaseDateWidth} type='text'>
                        <Input
                            type='date'
                            placeholder='Fecha de lanzamiento'
                            spellCheck='false'
                            value={releaseDate}
                            name='releaseDate'
                            onChange={handleInputChange}
                        />
                    </Cell>
                </Row>
            </Table>

            <ActionsButtons>
                <Button
                    onClick={handleOnSave}
                    disabled={isButtonDisabled}
                    type='success'
                >
                    Guardar
                </Button>
                <Button onClick={goToMovies} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Edit
