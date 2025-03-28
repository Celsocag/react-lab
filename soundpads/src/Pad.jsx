import React from "react"

export default function Pad(props) {
    const [padState, setPadState] = React.useState(props.on)
  
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
            onClick={() => props.toggle(props.id)}
        ></button>
    )
}