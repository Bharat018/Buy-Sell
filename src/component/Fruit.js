import React, { useState } from 'react'
import "./Component.css"

const data = require('./Image.json');
export default function Fruit() {
    function Card({ data }) {
        return (
            <>
                <div className="content" onClick={(e) => getImg(e)}>
                <img src={require(`./images/${data.image}`)} id={data.id} alt={data.tag}></img>
                        <h3>{data.tag}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <h6>{data.price}</h6>
                        <button className="buy-2">Buy Now</button>
                </div>
            </>
        );
    }
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].tag === 'Fruit') {
            arr.push(<Card key={i} data={data[i]} />)
        }
    }

    const [model, setModel] = useState(false);
    const [tagimage, setTagImg] = useState('');
    function getImg(e) {
        setTagImg(e.target.src);
        setModel(true);
        // console.log(e.target.src);
    }

    return (
        <>
            <div className={model ? "model open" : "model"} >
                <img src={tagimage} alt="pic" />
                <h3>{data.tag}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <h6>{data.price}</h6>
                <button className="btn close" aria-label="Close" onClick={() => setModel(false)}>X</button>
            </div>
            <div className="row my-5" >
                {arr}
            </div>

        </>
    )
}