import React from 'react'

const Item = (props) => {
    return (
        <div className="item">
            <div className="poster"><img src={props.img}/></div>
            <div className="title"><h5>{props.title}</h5></div>
        </div>
    )
}
export default Item
