import React from 'react';

export const Arreglodiv = () => {

    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const dividirPor5 = (arr: number[]): number[] => {
        return arr.map(valor => valor / 5);
    }

    const nuevoArreglo = dividirPor5(arreglo);

    return (
        <div>
            <h3>Valores divididos por 5</h3>
            <span>{nuevoArreglo.join(', ')}</span>
        </div>
    );
}


