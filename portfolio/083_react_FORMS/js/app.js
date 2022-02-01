class Form extends React.Component {

    state = {
        city: "Miasto",
        text: "",
        isLoved: false,
        number: "0",
    }


    handleCityChange = (ev) => {
        this.setState({city: ev.target.value});
    }
    handleTextChange = (ev) => {
        this.setState({text: ev.target.value});
    }

    handleIsLovedChange = (ev) =>{
        this.setState({isLoved: ev.target.checked});
    }

    handleVisitsNumberChange(ev){
        this.setState({number: ev.target.value});
    }


    render() {
        console.log(this.state.city);
        console.log(this.state.text);
        console.log(this.state.isLoved);
        console.log(this.state.number);
        return (
            <div>
                <label>Podaj miasto:
                    <input type="text" value={this.state.city} onChange={this.handleCityChange}/>
                </label>
                <br/>
                <label>Napisz coś o tym mieście:
                    <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
                </label>
                <br/>
                <label>
                    Czy lubisz to miasto?
                    <input type="checkbox" checked={this.state.isLoved} onChange={this.handleIsLovedChange}/>
                </label>
                <br/>
                <label>Ile razy byłeś w tym mieście:
                    <select value={this.state.number} onChange={this.handleVisitsNumberChange.bind(this)}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="more">więcej</option>
                    </select>
                </label>
            </div>
        )
    }
}

ReactDOM.render(<Form/>, document.getElementById('root'))