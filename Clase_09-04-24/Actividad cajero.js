let saldoCuenta = 10000;
let nombreUsuario = prompt("Ingrese el nombre del usuario");

// function solicitarMonto(usuario) {
//     let montoSolicitado = parseInt(prompt("Hola!" + usuario + ". Ingrese el monto a retirar, debe ser menor al saldo de la cuenta."));
//     return montoSolicitado;
// }


function verificarMontoRetiro(saldo, usuario) {
    let monto = 0;
    console.log("Hola, " + usuario + "!" + " El saldo de la cuenta es de: $" + saldo);
    monto = parseInt(prompt("Ingrese el monto a retirar, debe ser menor al saldo de la cuenta."));

    while (monto > saldo || isNaN(monto) || monto <= 0) {
        if (isNaN(monto)) {
            console.log("El dato ingresado no es un valor numérico.");
            monto = parseInt(prompt("Ingrese el monto a retirar, debe ser menor al saldo de la cuenta.")); 

        } else if (monto <= 0) {
            console.log("El monto ingresado debe ser mayor a 0.")
            monto = parseInt(prompt("Ingrese el monto a retirar, debe ser menor al saldo de la cuenta."));
   
        } else if (monto > saldo) {
            console.log("El monto ingresado es mayor al saldo de la cuenta.")
            monto = parseInt(prompt("Ingrese el monto a retirar, debe ser menor al saldo de la cuenta."));
        }
    }
    return monto;
}


function realizarRetiro(saldo, usuario) {
    let montoRetirar = verificarMontoRetiro(saldo, usuario);
    saldo = saldo - montoRetirar;
    console.log("La extracción se realizó con éxito. El saldo de la cuenta es: $" + saldo);
}

realizarRetiro(saldoCuenta, nombreUsuario);
