class App extends React.Component {
    state = {
        active: true,
    }

    handleClick = () => {
        this.setState(prevState => ({active: !prevState.active}));
    }

    render() {
        return (
            <div>
                {this.state.active && <Clock/>}
                <SwitchButton active={this.state.active} click={this.handleClick}/>
            </div>
        )
    }
}


const SwitchButton = (props) => {
    // console.log("klik")
    return (
        <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
    )
}


class Clock extends React.Component {
    interval = ""
    state = {
        time: this.getTime(),
    }

    getTime() {
        const currentTime = new Date();
        // console.log(currentTime);
        return ({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
        })
    }

    setTime() {
        // console.log(this);
        console.log("Zegarek zamontowany");
        const time = this.getTime()
        this.setState({time})
    }

    componentDidMount() {
        this.interval = setInterval(this.setTime.bind(this), 1000)
        // console.log(this.interval);
    }

    componentWillUnmount() {
        console.log("Zegarek usunięty");

        clearInterval(this.interval)
    }

    render() {
        // console.log(this.interval);
        const {hours, minutes, seconds} = this.state.time
        return (
            <div>
                <h1>{hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))