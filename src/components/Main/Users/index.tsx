import './Users.css'
import UsersList from './UsersList';

function Users() {
    return(
        <div className="users">
            <h1>All users</h1>
            <UsersList />
        </div>
    )
}

export default Users;