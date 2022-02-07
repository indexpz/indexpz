class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
        console.log("Wywołana metoda constructor");
    }

    // componentWillMount() {
    //     console.log("Wywołana metoda componentWillMount");
    // }

    componentDidMount() {
        console.log("Wywołana metoda componentDidMount");
        this.setState({number: 1})
    }

    componentDidUpdate() {
        console.log("Wywołana metoda componentDidUpdate");

    }

    render() {
        console.log("Wywołana metoda render");
        return (
            <div>
                <p>
                    lifecycle – montowanie komponentu
                </p>
                <Child/>
            </div>
        )
    }
}

class Child extends React.Component {
    componentDidMount() {
        console.log("Wywołana metoda componentDidMount w componencie Child");
        // this.setState({number: 1})
    }

    render() {
        console.log(`-----------------------------------------`);
        console.log(`Wywołana metoda render w komponencie Child`);
        return (
            <h1>Dziecko</h1>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))