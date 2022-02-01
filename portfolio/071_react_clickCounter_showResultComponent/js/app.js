class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result
    }

    handleClick = (type, number = 1) => {
        // debugger
        if (type === "subtraction") {
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
                <MathButton
                    name="-10"
                    number="10"
                    type="subtraction"
                    click={this.handleClick}
                />
                <MathButton
                    name="-1"
                    number="1"
                    type="subtraction"
                    click={this.handleClick}
                />
                <MathButton
                    name="Reset"
                    type="reset"
                    click={this.handleClick}
                />
                <MathButton
                    name="+1"
                    number="1"
                    type="addition"
                    click={this.handleClick}
                />
                <MathButton
                    name="+10"
                    number="10"
                    type="addition"
                    click={this.handleClick}
                />

                <ShowResult
                    name="Liczba kliknięć: "
                    res={this.state.count}/>

                <ShowResult
                    name="Wynik: "
                    res={this.state.result}/>

            </React.Fragment>
        )
    }

}

const MathButton = (props) => {
    console.log(props);
    return (<button onClick={() => props.click(props.type, +props.number)}>{props.name}</button>)
}

const ShowResult = (props) => {
    return (<h1>{props.name}<span>{props.res}</span></h1>)
}

ReactDOM.render(<Counter result={0}/>, document.getElementById('root'))