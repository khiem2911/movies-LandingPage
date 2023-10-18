import React from "react"
import Buttons from "../model/Buttons"
import classe from './Button.module.css'
const Button:React.FC<Buttons> = (props) =>{
    
    const classes = `${classe.btn_banner} ` + props.classes
    return (
        <button className={classes}>
            {props.children}
        </button>
    )
}
export default Button