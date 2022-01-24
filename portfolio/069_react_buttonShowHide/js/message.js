class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            messageIsActive: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

handleClick(){
        // debugger
        this.setState((prevState)=>({
            // messageIsActive: !this.state.messageIsActive
            messageIsActive: !prevState.messageIsActive
        }))
}

    render() {
        console.log(this.state.messageIsActive);
        const text = "Lorem ipsum"
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>{this.state.messageIsActive ? "Ukryj" : "Pokaż"}</button>
                {/*{this.state.messageIsActive ? <p>{text}</p>   : null}*/}
                {/*<p>{this.state.messageIsActive && text}</p>*/}
                {this.state.messageIsActive && <p>{text}</p>}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Message/>, document.getElementById('root'))