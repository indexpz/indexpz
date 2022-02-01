// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>
// const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>
const ValidationMessage = (props) => {
    const {text} = props
    return (
        // <p>{props.text}</p>
        <p>{text}</p>
    )
}

const displayMessage = (isConfirmed, isFormValidated) => {
    if (isFormValidated) {
        if (isConfirmed) {
            return <ValidationMessage text="Możesz obejrzeć film. Zapraszamy!"/>
        } else {
            return <ValidationMessage text="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!"/>
        }
    } else {
        return null
    }
}



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

    // displayMessage = () => {
    //     if (this.state.isFormValidated) {
    //         if (this.state.isConfirmed) {
    //             return <ValidationMessage text="Możesz obejrzeć film. Zapraszamy!"/>
    //         } else {
    //             return <ValidationMessage text="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!"/>
    //         }
    //     } else {
    //         return null
    //     }
    // }

    render() {
        // console.log(this.state.isConfirmed);
        const {isConfirmed, isFormValidated} = this.state
        // console.log(isConfirmed);
        return (
            <React.Fragment>
                <h1>Kup bilet na horror roku!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" onChange={this.handleCheckboxChange} checked={isConfirmed}/>
                    <label htmlFor="age">Mam co najmniej 16 lat.</label>
                    <button type="submit">Kup bilet</button>
                </form>
                {/*{this.displayMessage()}*/}
                {/*{this.displayMessage(this.state.isFormValidated, this.state.isFormValidated)}*/}
                {displayMessage(isConfirmed, isFormValidated)}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<TicketShop/>, document.getElementById('root'))