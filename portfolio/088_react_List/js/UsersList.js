const UsersList = (props) => {
    const users = props.users.map(user => <User
        key={user.id}
        id={user.id}
        name={user.name}
        onDelete={props.onDelete}
    />)
    return(<ul>{users}</ul>)
}