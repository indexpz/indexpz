class App extends React.Component {
    state = {
        text: "",
        btn: "Uruchom"
    }

    handleClick = () => {
        const letter = Math.floor(1+Math.random() * 10)

        this.setState(() => {
            return {
                text: this.state.text + letter +" "
            }
        })
    }


    render() {

        const btnName = "Nowa liczba"


        return (
            <React.Fragment>
                {/*<button onClick={this.handleClick.bind(this)}>{this.props.btnTitle}</button>*/}
                {/*<button onClick={this.handleClick.bind(this)}>{btnName}</button>*/}
                <button onClick={this.handleClick.bind(this)}>{this.state.btn}</button>
                <PanelResult text={this.state.text}>bbb</PanelResult>
            </React.Fragment>
        )
    }
}

const PanelResult = (props) => {
    return(
        <h1>{props.text} {props.children}</h1>
    )
}

ReactDOM.render(<App btnTitle={"Dodaj liczbę"}/>, document.getElementById('root'))