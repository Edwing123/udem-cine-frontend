import { useNavigate } from 'react-router-dom'
import type { ChangeEvent } from 'react'
import { useState, useEffect } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import { Input, Select } from '@components/controls'
import Button from '@components/Button'
import type { NewFunction, Room, Schedule, Movie } from '@typ/data'
import ActionsButtons from '@components/pages/ActionsButtons'
import { TableHeaders, columnsWidth } from './common'
import { FunctionsAPI, MoviesAPI, RoomsAPI, SchedulesAPI } from '@api'

const { movieWidth, scheduleWidth, roomWidth, priceWidth } = columnsWidth

const Create = () => {
    const navigateTo = useNavigate()
    const [isCreating, setIsCreating] = useState(false)

    const goToFunctions = () => navigateTo('/functions')

    const [movies, setMovies] = useState<Movie[]>([])
    const [schedules, setSchedules] = useState<Schedule[]>([])
    const [rooms, setRooms] = useState<Room[]>([])

    const [{ movieId, scheduleId, room, price }, setState] =
        useState<NewFunction>({
            movieId: 0,
            scheduleId: 0,
            room: 0,
            price: 0
        })

    const isButtonDisabled =
        movieId <= 0 || scheduleId <= 0 || room <= 0 || price <= 0 || isCreating

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.valueAsNumber

        setState((s) => ({ ...s, [name]: value }))
    }

    const movieOptions = movies.map(({ id, title }) => {
        return (
            <Select.Item value={id.toString()} key={id}>
                <Select.ItemText>{title}</Select.ItemText>
            </Select.Item>
        )
    })

    const scheduleOptions = schedules.map(({ id, name }) => {
        return (
            <Select.Item value={id.toString()} key={id}>
                <Select.ItemText>{name}</Select.ItemText>
            </Select.Item>
        )
    })

    const roomOptions = rooms.map(({ number }) => {
        return (
            <Select.Item value={number.toString()} key={number}>
                <Select.ItemText>{number}</Select.ItemText>
            </Select.Item>
        )
    })

    const handleSelectChange = (prop: string) => (v: string) => {
        setState((s) => ({ ...s, [prop]: Number(v) }))
    }

    useEffect(() => {
        MoviesAPI.list().then((movies) => setMovies(movies))

        SchedulesAPI.list().then((schedules) => setSchedules(schedules))

        RoomsAPI.list().then((rooms) => setRooms(rooms))
    }, [])

    const handleOnCreate = () => {
        setIsCreating(true)

        FunctionsAPI.create({
            movieId,
            price,
            room,
            scheduleId
        })
            .then(({ ok, ...props }) => {
                if (!ok && 'reason' in props) {
                    alert(props.reason)
                    return
                }

                goToFunctions()
            })
            .finally(() => {
                setIsCreating(false)
            })
    }

    return (
        <>
            <PageTitle>Crear funcion</PageTitle>

            <Table>
                <TableHeaders />

                <Row>
                    <Cell width={movieWidth} type='text'>
                        <Select.Container
                            label='Selecciona una pelicula'
                            value={movieId.toString()}
                            onChange={handleSelectChange('movieId')}
                        >
                            {movieOptions}
                        </Select.Container>
                    </Cell>

                    <Cell width={scheduleWidth} type='text'>
                        <Select.Container
                            label='Selecciona un horario'
                            value={scheduleId.toString()}
                            onChange={handleSelectChange('scheduleId')}
                        >
                            {scheduleOptions}
                        </Select.Container>
                    </Cell>

                    <Cell width={roomWidth} type='text'>
                        <Select.Container
                            label='Selecciona una sala'
                            value={room.toString()}
                            onChange={handleSelectChange('room')}
                        >
                            {roomOptions}
                        </Select.Container>
                    </Cell>

                    <Cell width={priceWidth} type='text'>
                        <Input
                            type='number'
                            inputMode='numeric'
                            placeholder='Precio'
                            value={price}
                            name='price'
                            onChange={handleInputChange}
                        />
                    </Cell>
                </Row>
            </Table>

            <ActionsButtons>
                <Button
                    disabled={isButtonDisabled}
                    onClick={handleOnCreate}
                    type='success'
                >
                    Crear
                </Button>
                <Button
                    disabled={isCreating}
                    onClick={goToFunctions}
                    type='danger'
                >
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Create
