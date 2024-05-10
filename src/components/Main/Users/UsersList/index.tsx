import './UsersList.css'
import env from '../../../../environment'
import { useEffect, useState } from 'react'

import { IUser } from '../../All/Post'
import UsersListItem from './UsersListItem'

function UsersList() {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch(`${env.url}/users`)
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])


    if(!users) 
        return <p>Loading...</p>

    return(
        <div className="users-list">
            {users.map((user, index) => 
                <UsersListItem 
                    key={index}
                    displayName={user.displayName}
                    iconUrl={user.iconUrl}
                    id={user.id}
                />
            )}
        </div>
    )
}

export default UsersList;