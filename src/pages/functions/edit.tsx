import { useNavigate, useParams } from 'react-router-dom'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import Button from '@components/Button'
import { UpdateFunction } from '@typ/data'
import { Input, Select } from '@components/controls'
import ActionsButtons from '@components/pages/ActionsButtons'
import {
    TableHeaders,
    movieOptions,
    scheduleOptions,
    roomOptions,
    columnsWidth
} from './common'

const { movieWidth, scheduleWidth, roomWidth, priceWidth } = columnsWidth

const Edit = () => {
    const { function_id } = useParams<{ function_id: string }>()
    const navigateTo = useNavigate()

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
        setState((s) => ({ ...s, [prop]: v }))
    }

    return (
        <>
            <PageTitle>Editar function (id={function_id!})</PageTitle>

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
                <Button type='success'>Guardar</Button>
                <Button onClick={() => navigateTo('/functions')} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Edit
