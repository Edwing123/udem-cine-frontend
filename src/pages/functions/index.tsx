import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import {
    Table,
    Row,
    Cell,
    Add as AddButton,
    OptionsMenu
} from '@components/table'
import testFunctions from './testFunctions.json'
import { FC } from 'react'
import type { Function } from '@typ/data'
import { columnsWidth } from './common'
import Divider from '@components/pages/Divider'
import * as pagesUtils from '@utils/pages'

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
    functions: Function[]
    onEdit: (id: number) => () => void
    onDelete: (id: number) => () => void
}

const FunctionsRows: FC<FunctionsRowsProps> = ({
    functions,
    onEdit,
    onDelete
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

const Functions = () => {
    const navigateTo = useNavigate()

    const goToCreateFunction = () => {
        navigateTo('/functions/create')
    }

    const onEdit = pagesUtils.id((id: number) => {
        navigateTo(`/functions/edit/${id}`)
    })

    const onDelete = pagesUtils.id((id: number) => {})

    return (
        <>
            <PageTitle>Gestion de funciones</PageTitle>

            <Divider>
                <Table>
                    <TableHeaders />
                    <FunctionsRows
                        functions={testFunctions}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Table>

                <AddButton title='Crear funcion' onClick={goToCreateFunction} />
            </Divider>
        </>
    )
}

export default Functions
