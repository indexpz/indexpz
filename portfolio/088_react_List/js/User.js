const User = (props) =>{
    return (
        // <li key={props.id}><span>{props.name}</span><button onClick={()=>props.onDelete(props.id)}>Usuń</button></li>
        <li key={props.id}><span>{props.name}</span><button onClick={()=>props.onDelete(props.name)}>Usuń</button></li>
    )
}