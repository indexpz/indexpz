const header = <h1 onClick={function(){alert("kliknął")}} className="title">Witaj na stronie!</h1>

const classBig = "big"

const handleClick = ()=> alert("click")

const text2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, facilis maxime? Ab accusantium at aut\n" +
    "            beatae,\n" +
    "            commodi consequatur culpa cupiditate, debitis dicta distinctio facere impedit odit omnis optio perspiciatis,\n" +
    "            porro\n" +
    "            possimus quisquam ratione ullam veritatis."

const main = (
    <div>
        <h1 person="osoby" className="red" onClick={handleClick}>Pierwszy artykuł</h1>
        <p>{text2}</p>
    </div>
)


const text = "Stopka!"

const footer = (
    <footer>
        <p className = {classBig}>{text}</p>
    </footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.querySelector("#root"))