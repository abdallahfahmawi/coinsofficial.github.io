import React from 'react'
import './Button.scss'


const Styles = [
    "btn-Primary",
    "btn-Secondary",
    "btn-notification",
    "btn-more",
    "btn-favorite"
]

const Sizes = [
    "btn-largr",
    "btn-medium",
    "btn-small"

]

const Button = ({children, type,onClick,buttonStyle, buttonSize, className}) => {

    const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : "";



    return (
        <button  onClick={onClick} type={type}  className={`btns ${checkButtonStyle} ${className}`} >
            {children}
        </button>
    )
}

export default Button