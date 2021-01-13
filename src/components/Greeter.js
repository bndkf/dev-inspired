import React from 'react'

const Greeter = (props) => {
    return (
        <div>
            <h2>{props.memes}</h2>
            <h3>{props.message}</h3>
        </div>
    )
}

export default Greeter
