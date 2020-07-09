import React from 'react'
import Item from './Item'

const Content = (props) => {
    const data = props.data && props.data;
    const showItem = index => {
        //Checking if thumbnail exists
        if (data && data[index]) {
            if (!data[index].volumeInfo.imageLinks) {
                return <Item title={data[index].volumeInfo.title} img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png" />
            }else{
                return <Item title={data[index].volumeInfo.title} img={data[index].volumeInfo.imageLinks.thumbnail} />
            }
        }
    }
    return (
        <div className="row">
            <div className="col">
                {props.line == "1" ? showItem(0) : showItem(5)}
            </div>
            <div className="col">
                {props.line == "1" ? showItem(1) : showItem(6)}
            </div>
            <div className="col">
                {props.line == "1" ? showItem(2) : showItem(7)}
            </div>
            <div className="col">
                {props.line == "1" ? showItem(3) : showItem(8)}
            </div>
            <div className="col">
                {props.line == "1" ? showItem(4) : showItem(9)}
            </div>
        </div>
    )
}

export default Content
