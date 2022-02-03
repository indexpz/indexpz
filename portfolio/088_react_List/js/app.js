class List extends React.Component {
    state = {
        users: [
            {id: 0, name: "Zuzia"},
            {id: 1, name: "Jan"},
            {id: 2, name: "Anna"},
            {id: 3, name: "Marcin"},
            {id: 4, name: "Beata"},
        ]
    }

    // handleDeleteUser = (id) => {
    //     const users = [...this.state.users]
    //     const index = users.findIndex(user => user.id === id)
    //     users.splice(index, 1)
    //     this.setState({users,})
    // }

    handleDeleteUser = (name) => {
        // let users = Array.from(this.state.users)
        let users = this.state.users.slice()
        users = users.filter(user => name !== user.name)
        this.setState({users,})
    }

    render() {
        return (
            <React.Fragment>
                {/*<UsersList users={this.state.users} onDelete={this.handleDeleteUser}/>*/}
                <UsersList users={this.state.users} onDelete={this.handleDeleteUser}/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<List/>, document.getElementById('root'))