const Exchange = (props) => (
    <div> {props.title} {props.cash <=0 ? "" : (props.cash / props.ratio).toFixed(2)}</div>
)

// const Dolars = (props) => (
//     <div>Dolar: {props.cash <=0 ? "" : (props.cash / props.ratio).toFixed(2)}</div>
// )
//
// const Euros = (props) => (
//     <div>Euro: {props.cash <=0 ? "" : (props.cash / props.ratio).toFixed(2)}</div>
// )

class ExchangeCounter extends React.Component {
 state={
     amount: "",
     ratioDolar: 3.98,
     ratioEuro: 4.63,
 }

 handleChange = (ev)=>{
     this.setState({amount: ev.target.value})
 }

    render() {

     const {amount,ratioDolar,ratioEuro} = this.state

        return (
            <React.Fragment>
                <label>
                    <input type="number" value={this.state.amount} onChange={this.handleChange}/>
                </label>
                <Exchange cash={amount} ratio={ratioDolar} title={"Dolar:"}/>
                <Exchange cash={amount} ratio={ratioEuro} title={"Euro:"}/>

            </React.Fragment>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById("root"))