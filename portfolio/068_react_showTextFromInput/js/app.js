class App extends React.Component {
    state = {
        value: ""
    }

    handleChange(ev) {
        // console.log(ev.target.value);
        console.log(`Zawartość value przed setState: ${this.state.value}`);
        console.log(`Zawartość w evencie: ${ev.target.value}`);
        this.setState({value: ev.target.value});
        console.log(`Zawartość value po setState: ${this.state.value}`);
    }

    handleClick() {
        this.setState({value: ""})
    }

    render() {
        console.log("---------");
        console.log(`Zawartość value w trakcie render: ${this.state.value}`);
        console.log("---------");
        return (
            <React.Fragment>
                <input onChange={this.handleChange.bind(this)} type="text" placeholder="Wpisz..."
                       value={this.state.value}/>
                <button onClick={this.handleClick.bind(this)}>Reset</button>
                <h1 className={"title"}>{this.state.value.toUpperCase()}</h1>
            </React.Fragment>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'))