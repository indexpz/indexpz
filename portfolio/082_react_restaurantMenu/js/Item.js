const Item = (props) => {
    return (<li className={props.active ? "enabled" : "disabled"}
        // style={props.active ? {fontWeight: "bold"} : {color: "lightblue"}}
        onClick={() => props.changeStatus(props.id)}>{props.name}
    </li>)
}