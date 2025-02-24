import { useState } from "react"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiprimerComponente } from "./components/MiPrimerComponente/MiprimerComponente"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { AppProduct } from "./components/AppProduct/AppProduct";


export const App = () => {
    const [enableCounter, setEnableCounter] = useState(false);

  return (
    <div style={{display:"flex", flexDirection:"column", gap:"2vh"}}>
       {/*  <MiprimerComponente text='Hola como va' color='blue' fontSize={2}/>
        {enableCounter && <ComponentCounter />}
        <ComponentCounter/>
        <ComponentUseEffect></ComponentUseEffect> 
        <FormComponent></FormComponent> */}
        <AppProduct></AppProduct>
    </div>
  )
}

{/* <button onClick={()=>{
            setEnableCounter(!enableCounter);
        }}>
            Mostrar contador
        </button> */}