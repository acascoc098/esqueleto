import './Button.css'
import PropTypes from 'prop-types';

const Button = (props) => {
    return props.type ? <button className={props.type} onClick={() => {props.enviar()}}>{props.title}</button> : <button className="primary" onClick={() => {props.enviar()}}>{props.title}</button>
    //Ponemos un operador ternario por si no se pasa un estilo que se ponga por defecto primary
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    enviar: PropTypes.func,
}

export default Button;