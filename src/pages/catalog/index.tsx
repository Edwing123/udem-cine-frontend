import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell, OptionsMenu } from '@components/table'
import { FC } from 'react'
import { useState, useEffect } from 'react'
import type { FunctionDetails } from '@typ/data'
import { columnsWidth } from './common'
import Divider from '@components/pages/Divider'
import * as pagesUtils from '@utils/pages'
import { FunctionsAPI } from '@api'

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
            <Cell type='header' width={createdAtWidth}>
                Fecha de creacion
            </Cell>
        </Row>
    )
}

type FunctionsRowsProps = {
    functions: FunctionDetails[]
    onEdit: (id: number) => () => void
    onDelete: (id: number) => () => void
    showOptions: boolean
}

const FunctionsRows: FC<FunctionsRowsProps> = ({
    functions,
    onEdit,
    onDelete,
    showOptions
}) => {
    return (
        <>
            {functions.map(
                ({ id, movie, schedule, room, price, createdAt }) => {
                    return (
                        <Row key={id}>
                            <Cell width={movieWidth} type='text'>
                                {movie}
                            </Cell>

                            <Cell width={scheduleWidth} type='text'>
                                {schedule}
                            </Cell>
                            <Cell width={roomWidth} type='text'>
                                {room}
                            </Cell>
                            <Cell width={priceWidth} type='text'>
                                C${price}
                            </Cell>
                            <Cell width={createdAtWidth} type='text'>
                                {createdAt}
                            </Cell>
                            {showOptions && (
                                <OptionsMenu
                                    title='Opciones'
                                    onEdit={onEdit(id)}
                                    onDelete={onDelete(id)}
                                />
                            )}
                        </Row>
                    )
                }
            )}
        </>
    )
}

const Functions = () => {
    const [functions, setFunctions] = useState<FunctionDetails[]>([])

    useEffect(() => {
        FunctionsAPI.list().then((functions) => {
            setFunctions(functions)
        })
    }, [])

    const snoop = pagesUtils.id((id: number) => {})

    return (
        <>
            <PageTitle>Funciones disponibles</PageTitle>

            <Divider>
                <Table>
                    <TableHeaders />
                    <FunctionsRows
                        functions={functions}
                        onEdit={snoop}
                        onDelete={snoop}
                        showOptions={false}
                    />
                </Table>
            </Divider>
        </>
    )
}

export default Functions
