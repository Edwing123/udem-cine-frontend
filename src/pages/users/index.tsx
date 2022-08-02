import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import testUsers from './testUsers.json'
import type { User } from '@typ/data'
import { TableHeaders, columnsWidth } from './common'
import Divider from '@components/pages/Divider'
import * as pagesUtils from '@utils/pages'
import {
    Table,
    Row,
    Cell,
    Add as AddButton,
    OptionsMenu
} from '@components/table'

const { nameWidth, roleWidth } = columnsWidth

type UsersRowsProps = {
    users: User[]
    onEdit: (id: number) => () => void
    onDelete: (id: number) => () => void
}

const UsersRows: FC<UsersRowsProps> = ({ users, onEdit, onDelete }) => {
    return (
        <>
            {users.map(({ id, name, role }) => {
                return (
                    <Row key={id}>
                        <Cell width={nameWidth} type='text'>
                            {name}
                        </Cell>

                        <Cell width={roleWidth} type='text'>
                            {role}
                        </Cell>
                        <OptionsMenu
                            title='Opciones'
                            onEdit={onEdit(id)}
                            onDelete={onDelete(id)}
                        />
                    </Row>
                )
            })}
        </>
    )
}

const Users = () => {
    const navigateTo = useNavigate()

    const goToCreateMovie = () => {
        navigateTo('/users/create')
    }

    const onEdit = pagesUtils.id((id: number) => {
        navigateTo(`/users/edit/${id}`)
    })

    const onDelete = pagesUtils.id((id: number) => {})

    return (
        <>
            <PageTitle>Gestion de usuarios</PageTitle>

            <Divider>
                <Table>
                    <TableHeaders />
                    <UsersRows
                        users={testUsers}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Table>

                <AddButton title='Agregar usuario' onClick={goToCreateMovie} />
            </Divider>
        </>
    )
}

export default Users
