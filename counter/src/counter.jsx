import { useState } from "react"

export default function Bal (){
    const [count, setCount] =useState(0);
    const handleAdd =()=>{
        const newCount =count+10;
        setCount(newCount);
    }
    const handleRedus=()=>{
        const newCount = count -10;
        setCount(newCount);
    }

    return (
        <div>
        <h1>{count}</h1>
        <button onClick={handleAdd} style={{paddingRight:'20px',paddingLeft:'20px', paddingTop:'0px',paddingBottom:'0px'}}><h4>Click Me & Add </h4></button>
        <button onClick={handleRedus} style={{paddingRight:'20px',paddingLeft:'20px', paddingTop:'0px',paddingBottom:'0px'}}><h4>Click Me & Add </h4></button>
        </div>
    )
}