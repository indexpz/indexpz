const ValidationMessage = (props) => {
    const {text} = props
    return (
        // <p>{props.text}</p>
        <p>{text}</p>
    )
}


const OrderForm = (props) => {
    const {submit, isConfirmed, change } = props;

    return(
    // <form onSubmit={props.submit}>
    //     <input type="checkbox" onChange={props.change} checked={props.isConfirmed}/>
    //     <label htmlFor="age">Mam co najmniej 16 lat.</label>
    //     <button type="submit">Kup bilet</button>
    // </form>

        <form onSubmit={submit}>
            <input type="checkbox" onChange={change} checked={isConfirmed}/>
            <label htmlFor="age">Mam co najmniej 16 lat.</label>
            <button type="submit">Kup bilet</button>
        </form>
)}


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
                return <ValidationMessage text="Możesz obejrzeć film. Zapraszamy!"/>
            } else {
                return <ValidationMessage text="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!"/>
            }
        } else {
            return null
        }
    }

    render() {
        // console.log(this.state.isConfirmed);
        const {isConfirmed, isFormValidated} = this.state
        // console.log(isConfirmed);
        return (
            <React.Fragment>
                <h1>Kup bilet na horror roku!</h1>
                <OrderForm
                    change={this.handleCheckboxChange}
                    submit={this.handleFormSubmit}
                    checked={isConfirmed}/>
                {this.displayMessage()}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<TicketShop/>, document.getElementById('root'))