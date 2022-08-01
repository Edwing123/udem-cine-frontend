import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import { Input, Select } from '@components/controls'
import Button from '@components/Button'
import type { NewMovie } from '@typ/data'
import ActionsButtons from '@components/pages/ActionsButtons'
import { TableHeaders, classificationOptions, columnsWidth } from './common'

const {
    titleWidth,
    classificationWidth,
    genreWidth,
    durationWidth,
    releaseDateWidth
} = columnsWidth

const Create = () => {
    const [{ title, classification, genre, duration, releaseDate }, setState] =
        useState<NewMovie>({
            title: '',
            classification: '',
            genre: '',
            duration: 0,
            releaseDate: ''
        })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setState((s) => ({ ...s, [name]: value }))
    }

    const handleClasificationChange = (v: string) => {
        setState((s) => ({ ...s, classification: v }))
    }

    const navigateTo = useNavigate()

    return (
        <>
            <PageTitle>Agregar pelicula</PageTitle>

            <Table>
                <TableHeaders />

                <Row>
                    <Cell width={titleWidth} type='text'>
                        <Input
                            type='text'
                            placeholder='Titulo de la pelicula'
                            spellCheck='false'
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
                <Button type='success'>Agregar</Button>
                <Button onClick={() => navigateTo('/movies')} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Create
