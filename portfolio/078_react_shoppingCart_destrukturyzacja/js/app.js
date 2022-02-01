class ShoppingCart extends React.Component {

    state = {
        availableProducts: 7,
        shoppingCart: 1
    }

    handleRemoveFromCart = () => {
        this.setState({shoppingCart: this.state.shoppingCart - 1})
    }

    handleAddToCart = () => {
        this.setState({shoppingCart: this.state.shoppingCart + 1})
    }

    handleBuy = () => {
        // console.log("kupione");
        this.setState({
            availableProducts: this.state.availableProducts - this.state.shoppingCart,
            shoppingCart: 0
        })
    }

    render() {
        const {shoppingCart, availableProducts} = this.state

        const styleZero = shoppingCart === 0 ? {opacity: 0.3} : {}

        return (
            <div>
                <button disabled={shoppingCart === 0 ? true : false}
                        onClick={this.handleRemoveFromCart}>-
                </button>


                <span style={styleZero}>{shoppingCart}</span>


                <button disabled={shoppingCart >= availableProducts ? true : false}
                        onClick={this.handleAddToCart}>+
                </button>
                {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}

            </div>
        )
    }
}

ReactDOM.render(<ShoppingCart/>, document.getElementById('root'))