import { useState } from "react"


export const ComponentCounter = () => {
 const [counter,setCounter] = useState<number>(0);

 const incremetCounter = ()=>{
    setCounter((prev)=>prev+1)
 }

 const decrementCounter = ()=>{
    if(counter>0){
        setCounter((prev)=>prev-1)
    }
 }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={incremetCounter}>Incrementar</button>
        <button onClick={decrementCounter}>Disminuir</button>
    </div>
  )
}
