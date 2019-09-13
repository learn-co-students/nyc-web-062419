import React from 'react'

const Bacon = (props) => {
    return (
        <img alt="" src={props.baconImages[Math.floor(Math.random() * props.baconImages.length)]} />: "score"

    )
}

export default Bacon