const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>

class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isFormValidated: false
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormValidated: false
        })
    }

    handleFormSubmit = (ev) => {
        ev.preventDefault()
        // console.log("click");
        if (!this.state.isFormValidated) {
            this.setState({
                isFormValidated: true
            })
        }
    }

    displayMessage = () => {
        if (this.state.isFormValidated) {
            if (this.state.isConfirmed) {
                return <PositiveMessage/>
            } else {
                return <NegativeMessage/>
            }
        } else {
            return null
        }
    }

    render() {
        // console.log(this.state.isConfirmed);
        return (
            <React.Fragment>
                <h1>Kup bilet na horror roku!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed}/>
                    <label htmlFor="age">Mam co najmniej 16 lat.</label>
                    <button type="submit">Kup bilet</button>
                </form>
                {this.displayMessage()}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<TicketShop/>, document.getElementById('root'))