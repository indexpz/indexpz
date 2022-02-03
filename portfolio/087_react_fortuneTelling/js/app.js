class FortuneTelling extends React.Component {

    state = {
        isForetelled: "",
        omensArray: ["wróżba 1", "wróżba 2", "wróżba 3"],
        newOmen: "",
    }

    handleDrawForetell = () => {
        const min = 0
        const max = this.state.omensArray.length
        const index = Math.floor(Math.random() * (max - min)) + min;
        // console.log(number);
        this.setState({isForetelled: this.state.omensArray[index]})
    }

    handleChange = (ev) => {
        this.setState({newOmen: ev.target.value});
    }

    handleAddOmen = () => {
        const myOmen = this.state.newOmen
        let myArray = [...this.state.omensArray]
        if (myOmen !== "") {
            myArray.push(myOmen)
            alert(`Wszystkie wróżby: ${myArray}`)
            this.setState({omensArray: myArray, newOmen: ""})
        }


    }

    render() {

        const {isForetelled, newOmen} = this.state

        return (
            <React.Fragment>
                <div className="first">
                    <button onClick={this.handleDrawForetell}>Zobacz wróżbę</button>
                </div>
                <div className="second"><input type="text" value={newOmen} onChange={this.handleChange}/>
                    <button onClick={this.handleAddOmen}>Dodaj wróżbę</button>
                </div>
                <h1>{isForetelled}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<FortuneTelling/>, document.getElementById('root'))