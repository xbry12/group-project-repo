import React from 'react';
import './Button.css'

const Button = (props) => {

    let classList = ''

    let types = ['booked', 'notBooked']

    if(types.includes(props.type)){
        classList+= ` button-${props.type}`
    }
    
  

   return (
   <button onClick={props.onClick} className={classList}>
       {props.label}
        
    </button>
)
   }

export default Button; 