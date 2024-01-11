import './Button.css'

const Button = (props) => {
    return <button className={props.type} onClick={() => {props.enviar()}}>{props.title}</button>
}

export default Button;