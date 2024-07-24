

export const Arreglo = () => {

    const sumarElementos = (arre: number[]): number => {
        return arre.reduce((suma, elemento) => suma + elemento, 0);
    }

    
    const Arregloo: number[] = [3, 7, 8, 5];

    return (
        <div>
            <h3>Suma </h3>
            <span>el resultado es {sumarElementos(Arregloo)}</span>
        </div>
    );
}
