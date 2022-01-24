class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    // state = {
    //     text: "",
    //     number: 2
    // }

    handleClick() {
        // alert(this.state.text)
        // this.state.text += "A"
        // console.log(this.state.text);
        // console.log(this);
        const letter = "a"
        // this.setState({
        //     text: this.state.text + letter
        // })
        this.setState(() => {
            return {
                text: this.state.text + letter
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
                <h1>{this.state.text}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))