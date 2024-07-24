import { useState } from "react";

export const Contador = () => {
    //hoock useState :cambiar el valor o un componente
    const [ valorContador, setValorContador] = useState <number>(0); //valor inicial
// funcion que se encargue de cambiar el valor contador
const cambiarContador =(numero : number)=>{
    //llamar la funcion useState
    setValorContador (valorContador+numero);
}
const cambiarContadorr =(numero : number)=>{
    //llamar la funcion useState
    setValorContador (valorContador+numero);
}


  return (
    <div>
        <h3>CONTADOR <small>{valorContador}</small></h3>
        <button 
        className="btn btn-primary"    
        onClick ={()=> cambiarContador(5)}>
            +5
            </button>
        &nbsp;
        <button className="btn btn-primary"
        onClick ={()=> cambiarContadorr(-5)}
        
        >
            -5
            </button>
       
      </div>
  )
}