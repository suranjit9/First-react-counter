import { useEffect, useState } from "react"

export default function Megi(){
    const [users, setusera]=useState([]);
    useEffect(()=>{
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data => setusera(data))  
    },[])
    return(
        <div>
            <h2>Data :{users.length}</h2>
        </div>
    )
}