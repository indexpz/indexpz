const Item = (props) => <li>{`Owoc ${props.content}`}</li>


class ListItems extends React.Component {

    state = {
        items: ["jabłko", "śliwka", "gruszka"]
    }

    render() {

        const Items = this.state.items.map(item => <Item key={item} content={item}/>)

        return (
            <ul>
                {/*{this.state.items.map((item, id) => <li key={id}>{item}</li>)}*/}

                {/*Trzeba dodać key={}*/}
                {/*{this.state.items.map(item => <li key={item}>{item}</li>)}*/}

                {/*Template string*/}
                {/*{this.state.items.map(item => <li key={item}>{`Owoc ${item}`}</li>)}*/}

                {/*{this.state.items.map(item => <Item key={item} content={item}/>)}*/}

                {Items}

            </ul>
        )
    }
}

ReactDOM.render(<ListItems/>, document.getElementById('root'))