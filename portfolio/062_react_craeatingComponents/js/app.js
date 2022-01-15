//komponent funkcyjny, bezstanowy

const Header = () => {
    return (
        <h1>Witaj na stronie</h1>
    )
}


// komponent klasowy, stanowy

class Blog extends React.Component {
    state = {
        number: 0,
    }

    render() {
        return (
            <section>
                <h2>Artykuł {this.state.number}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dignissimos odit
                    praesentium. Adipisci architecto culpa dolore fuga fugit harum incidunt, ipsa molestiae neque
                    placeat porro quaerat quas quo totam voluptatibus. Accusamus aperiam commodi debitis distinctio id
                    magni pariatur suscipit vero voluptatem voluptatibus. Culpa ipsum optio quibusdam soluta velit.</p>
            </section>
        )
    }
}


const App = () => {
    return (
        <>
            <Header/>
            <Blog/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
