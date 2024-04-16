let saldoCuenta = 10000; //Definimos el saldo de la cuenta
let nombreUsuario = prompt("Ingrese el nombre del usuario"); //Solicitamos el nombre del usuario

/* La siguiente función valida el monto ingresado. Mientras
se ingrese un monto negativo, igual a cero, mayor al saldo o 
un valor no numérico (NaN), el ciclo solicita al usuario el monto nuevamente */

function verificarMontoRetiro(saldo, usuario) {
    let monto = 0;
    alert("Hola, " + usuario + "!" + " El saldo de la cuenta es de: $" + saldo);
    monto = parseInt(prompt("Ingrese el monto a retirar, debe ser menor al saldo de la cuenta."));

    while (monto > saldo || isNaN(monto) || monto <= 0) {
        if (isNaN(monto)) {
            alert("El dato ingresado no es un valor numérico.");
            monto = parseInt(prompt("Ingrese el monto a retirar, debe ser menor al saldo de la cuenta.")); 

        } else if (monto <= 0) {
            alert("El monto ingresado debe ser mayor a 0.")
            monto = parseInt(prompt("Ingrese el monto a retirar, debe ser menor al saldo de la cuenta."));
   
        } else if (monto > saldo) {
            alert("El monto ingresado es mayor al saldo de la cuenta.")
            monto = parseInt(prompt("Ingrese el monto a retirar, debe ser menor al saldo de la cuenta."));
        }
    }
    return monto;
}


function realizarRetiro(saldo, usuario) {
    let montoRetirar = verificarMontoRetiro(saldo, usuario);
    saldo = saldo - montoRetirar;
    alert("La extracción se realizó con éxito. El saldo de la cuenta es: $" + saldo);
}

realizarRetiro(saldoCuenta, nombreUsuario);
