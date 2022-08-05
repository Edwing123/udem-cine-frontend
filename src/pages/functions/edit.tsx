import { useNavigate, useParams } from 'react-router-dom'
import type { ChangeEvent } from 'react'
import { useState, useRef, useEffect } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import Button from '@components/Button'
import { UpdateFunction, Function, Movie, Schedule, Room } from '@typ/data'
import { Input, Select } from '@components/controls'
import ActionsButtons from '@components/pages/ActionsButtons'
import { TableHeaders, columnsWidth } from './common'
import { FunctionsAPI, MoviesAPI, RoomsAPI, SchedulesAPI } from '@api'

const { movieWidth, scheduleWidth, roomWidth, priceWidth } = columnsWidth

const Edit = () => {
    const { function_id } = useParams<{ function_id: string }>()
    const navigateTo = useNavigate()
    const [isEditing, setIsEditing] = useState(false)

    const currentValues = useRef<Function>({
        id: 0,
        movieId: 0,
        room: 0,
        scheduleId: 0,
        price: 0,
        createdAt: ''
    })

    const [movies, setMovies] = useState<Movie[]>([])
    const [schedules, setSchedules] = useState<Schedule[]>([])
    const [rooms, setRooms] = useState<Room[]>([])

    const goToFunctions = () => navigateTo('/functions')

    const [{ movieId, scheduleId, room, price }, setState] =
        useState<UpdateFunction>({
            movieId: 0,
            scheduleId: 0,
            room: 0,
            price: 0
        })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.valueAsNumber

        setState((s) => ({ ...s, [name]: value }))
    }

    const handleSelectChange = (prop: string) => (v: string) => {
        setState((s) => ({ ...s, [prop]: Number(v) }))
    }

    const handleOnSave = () => {
        setIsEditing(true)

        FunctionsAPI.edit(currentValues.current.id, {
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
                setIsEditing(false)
            })
    }

    useEffect(() => {
        MoviesAPI.list().then((movies) => setMovies(movies))
        SchedulesAPI.list().then((schedules) => setSchedules(schedules))
        RoomsAPI.list().then((rooms) => setRooms(rooms))

        FunctionsAPI.get(Number(function_id)).then((func) => {
            currentValues.current.id = func.id
            currentValues.current.movieId = func.movieId
            currentValues.current.scheduleId = func.scheduleId
            currentValues.current.room = func.room
            currentValues.current.price = func.price
            setState(() => ({ ...func }))
        })
    }, [])

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

    return (
        <>
            <PageTitle>
                Editar function (id={currentValues.current.id}, precio=
                {currentValues.current.price})
            </PageTitle>

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
                <Button onClick={handleOnSave} type='success'>
                    Guardar
                </Button>
                <Button onClick={goToFunctions} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Edit
