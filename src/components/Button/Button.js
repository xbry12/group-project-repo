import React from 'react';
import './Button.css'

const Button = (props) => {

    let classList = ''

    let types = ['edit', 'delete', 'book']

    if(types.includes(props.type)){
        classList+= ` button-${props.type}`
    }
    // if(props.hover) {
    //     classList += ` button-${props.type}-hover`
    // }
    // if(props.outline) {
    //     classList += ` button-${props.type}-outline`
    // }
    // if(props.faded) {
    //     classList += ` button-${props.type}-faded`
    // }
    // if(props.large){
    //     classList += ` button-large`
    // }
  

   return (
   <button onClick={props.onClick} className={classList}>
       {props.label}
        
    </button>
)
   }

export default Button; 