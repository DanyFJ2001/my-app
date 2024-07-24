

interface Alumno {
    name: string;
    edad: number;
    calificacion: number;
}

export const Promedio = () => {

    const alumnos: Alumno[] = [
        {
            name: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            name: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            name: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];

    const calcularPromedioCalificaciones = (alumnos: Alumno[]): number => {
        const sumaCalificaciones = alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);
        return sumaCalificaciones / alumnos.length;
    }

    const promedio = calcularPromedioCalificaciones(alumnos);

    return (
        <div>
            <h3>Promedio de Calificaciones</h3>
            <span>El promedio es: {promedio}</span>
        </div>
    );
}

