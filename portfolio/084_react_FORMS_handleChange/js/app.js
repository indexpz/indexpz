class Form extends React.Component {

    state = {
        city: "Miasto",
        text: "",
        isLoved: false,
        number: "0",
    }


    handleChange = (ev) => {
        // console.log(ev.target.name);
        // console.log(ev.target.type);
        if(ev.target.type === "checkbox"){
            this.setState({[ev.target.name]: ev.target.checked});
        }else{
            this.setState({[ev.target.name]: ev.target.value});
        }
    }



    render() {
        // console.log(this.state.city);
        // console.log(this.state.text);
        // console.log(this.state.isLoved);
        // console.log(this.state.number);
        return (
            <div>
                <label>Podaj miasto:
                    <input name="city" type="text" value={this.state.city} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Napisz coś o tym mieście:
                    <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                </label>
                <br/>
                <label>
                    Czy lubisz to miasto?
                    <input name="isLoved" type="checkbox" checked={this.state.isLoved} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Ile razy byłeś w tym mieście:
                    <select name="number" value={this.state.number} onChange={this.handleChange}>
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