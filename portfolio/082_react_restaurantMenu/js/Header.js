const Header = (props) =>{

const activeItems = props.items.filter(item => item.active);
const number = activeItems.length;

    return(
        <header>
            <h2>Wielkość zamówienia {number}  szt.</h2>
            <h2>{number ? `Do zapłaty  ${number * 10} zł.` : "Nic do zapłaty." }</h2>
        </header>
    )
}