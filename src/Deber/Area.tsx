
    export const Area = () => {

        const multiplicar = (lado1: number , lado2:number ): number => {
            return  lado1*lado2;
            
            }


      return (
        <div><h3>Area de un cuadrado</h3>
        <span>El resultado es : {multiplicar(4,8)} </span>
        </div>
      )
    }
    

