const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>

class TicketShop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isConfirmed: false,
            isValidated: false
        }
    }


    handleChange = () => {
        this.setState({isConfirmed: !this.state.isConfirmed, isValidated: false})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log("klik");
        if(!this.state.isValidated){
            this.setState({isValidated: true})
        }

    }

    showMessage = () => {
        if (this.state.isValidated) {
            if (!this.state.isConfirmed) {
                return <NegativeMessage/>
            } else {
                return <PositiveMessage/>
            }
        } else {
            return null
        }
    }

    render() {
        console.log(this.state.isConfirmed);
        return (
            <React.Fragment>
                <h1>Kup bilet na horror roku!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="checkbox" onChange={this.handleChange} checked={this.state.isConfirmed}/>
                    <label htmlFor="age">Mam co najmniej 16 lat.</label>
                    <button type="submit">Kup bilet</button>
                </form>
                {this.showMessage()}
            </React.Fragment>

        )
    }
}

ReactDOM.render(<TicketShop/>, document.getElementById("root"))