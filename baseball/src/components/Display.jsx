import React from 'react'

const Display = (props) => {

    return (
        <section>
            <h1>balls: {props.balls}</h1>
            <h1>strikes: {props.strikes}</h1>
        </section>
    )
}
export default Display