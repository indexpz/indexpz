class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result
    }

    handleClick(type, number = 1) {
        // debugger
        if (type === "substraction") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        } else if (type === "reset") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: 0
            }))
        } else if (type === "addition") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        }
    }

    render() {

        return (
            <React.Fragment>
                <button onClick={this.handleClick.bind(this, "substraction", 10)}>-10</button>
                <button onClick={() => this.handleClick("substraction", 1)}>-1</button>
                <button onClick={this.handleClick.bind(this, "reset")}>Reset wyniku</button>
                <button onClick={this.handleClick.bind(this, "addition", 1)}>+1</button>
                <button onClick={this.handleClick.bind(this, "addition", 10)}>+10</button>
                <h1>Liczba kliknięć: {this.state.count}</h1>
                <h1>Wynik: {this.state.result}</h1>
            </React.Fragment>
        )
    }

}

ReactDOM.render(<Counter result={0}/>, document.getElementById('root'))