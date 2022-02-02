const Cash = (props) => (
    <div> {props.title} {props.cash <= 0 ? "" : ((props.cash / props.ratio) * props.price).toFixed(2)}</div>
)

class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        product: "electricity",
    }

    static  defaultProps = {
        currencies: [
            {
                id: 0,
                name: "PLN",
                ratio: 1,
                title: "Wartość w złotówkach:"
            }, {
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
        ],
        prices: {
            electricity: 0.55,
            gas: 5.89,
            oranges: 12
        }
    }


    handleChange = (ev) => {
        this.setState({amount: ev.target.value})
    }

    handleProductChange = (ev) => {
        this.setState({product: ev.target.value, amount:""})
    }

    insertSuffix = (select) => {
        if (select === "electricity") {
            return <em>kWh</em>
        } else if (select === "gas") {
            return <em>litrów</em>
        } else if (select === "oranges") {
            return <em>kilogramów</em>
        } else {
            return ""
        }
    }

    selectPrice = (select) => {
        // console.log(this.props.prices);
        return this.props.prices[select]
    }


    render() {


        const {amount, product} = this.state
        const price = this.selectPrice(product)

        const calculators = this.props.currencies.map(el => <Cash key={el.id} ratio={el.ratio} title={el.title}
                                                                  cash={amount} price={price}/>)

        return (
            <React.Fragment>
                <label>
                    Wybierz produkt:
                    <select value={product} onChange={this.handleProductChange}>
                        <option value="electricity">prąd</option>
                        <option value="gas">gaz</option>
                        <option value="oranges">pomarańcze</option>
                    </select>
                </label>
                <br/>
                <label>
                    <input type="number" value={this.state.amount} onChange={this.handleChange}/>
                    {this.insertSuffix(product)}
                </label>
                {calculators}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById("root"))