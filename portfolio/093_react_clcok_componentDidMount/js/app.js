class Clock extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state={
    //         time: this.getTime(),
    //     }
    //     this.interval = ""
    // }

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
        const time = this.getTime()
        this.setState({time})
    }

    componentDidMount() {
        this.interval = setInterval(this.setTime.bind(this), 1000)
        // console.log(this.interval);
    }

    componentWillUnmount() {
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

ReactDOM.render(<Clock/>, document.getElementById('root'))