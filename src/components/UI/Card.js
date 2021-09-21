import './Card.css'
const Card=(props)=>{
    const classes='card '+props.className;
    return <div className={classes}>{props.children}</div> // children is a reserved name in react, value is the content between the open and closing tag
}
export default Card