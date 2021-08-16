import React from 'react'
import './Button.css'

function Buttons({
    className,
    onClick,
    children
    }) {
    return (
        
        <div>
            <button 
            className={className} 
            onClick = {onClick}
            >{children}</button>
        </div>
    )
}

export default Buttons
