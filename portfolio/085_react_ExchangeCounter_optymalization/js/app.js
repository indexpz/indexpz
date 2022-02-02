const Cash = (props) => (
    <div> {props.title} {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}</div>
)

class ExchangeCounter extends React.Component {
    state = {
        amount: "",
    }


    currencies = [
        {
            id: 1,
            name: "USD",
            ratio: 3.89,
            title: "Wartość w dolarach:"
        },
        {
            id: 2,
            name: "EUR",
            ratio: 4.63,
            title: "Wartość w euro:"
        },
        {
            id: 3,
            name: "GPB",
            ratio: 5.21,
            title: "Wartość w funtach:"
        },

    ]


    handleChange = (ev) => {
        this.setState({amount: ev.target.value})
    }

    render() {

        const calculators = this.currencies.map(el => <Cash key={el.id} ratio={el.ratio} title={el.title} cash={this.state.amount} />)

        return (
            <React.Fragment>
                <label>
                    <input type="number" value={this.state.amount} onChange={this.handleChange}/>
                </label>
                {calculators}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById("root"))