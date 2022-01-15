// console.log(React);
// console.log(ReactDOM);

const element1 = <div>Pierwszy element React</div>

// console.log(typeof element1)


const element2 = React.createElement(
    "div",
    null,
    "Pierwszy element React"
)


const element3 = (<div>
    <p>Tekst</p>
</div>)


const element4 = <div><p>Tekst</p></div>


const element5 = (
    <React.Fragment>
        <section><h1 className="red">A</h1></section>
        <section><p>Text</p></section>
    </React.Fragment>
)