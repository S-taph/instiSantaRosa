//Teniendo una variable numérica que representa el número de lados
//de una figura geométrica, mostrar por consola su tipo.
//Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o
//"Polígono", según corresponda:

// Círculo: si el número de lados es 0.
// Triángulo: si el número de lados es 3.
// Cuadrado: si el número de lados es 4.
// Pentágono: si el número de lados es 5.
// Hexágono: si el número de lados es 6.
// Polígono: si el número de lados es mayor que 6.
// Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.

function tipoFigura(lados, longitud) {
    let perimetro = longitud * lados;

    if (lados == 0) {
        return "Círculo de perímetro " + perimetro;
    } else if (lados == 3) {
        return "Triángulo de perímetro " + perimetro;
    } else if (lados == 4) {
        return "Cuadrado de perímetro " + perimetro;
    } else if (lados == 5) {
        return "Pentágono de perímetro " + perimetro;
    } else if (lados == 6) {
        return "Hexágono de perímetro " + perimetro;
    } else {
        return "Polígono de perímetro " + perimetro;
    }
}

let cantLados = -1;

while (cantLados < 0) {
    
    cantLados = prompt("Ingrese el número de lados. El valor ingresado no puede ser menor a cero");
}

console.log("Según los lados ingresados, la figura es un: " + tipoFigura(cantLados));


