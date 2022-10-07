//Se pide al usuario que ingrese un número.
//Como prompt toma los datos como tipo string, lo parseo a tipo entero para guardarlo en la variable 'number'
let number = parseInt(prompt('Ingrese un número y el sistema le dirá si es primo o compuesto'));
let contador =0
//Este for evalúa itera dividiendo por cada número menor al contenido de la variable 'number'
//y va sumando 1 a la variable contador cada vez que el resto de la división es cero.
for(let i=1; i<= number; i++){
    if(number%i === 0){
        contador = contador +1;
    }
}
//Como un número primo es divisible por si mismo y por uno, contador debe ser igual a dos.
//Si contador es mayor, el número tiene más de dos divisores y es compuesto.
if(contador === 2) {
    alert('El número ingresado es primo');
} else {
    alert('El número ingresado es compuesto');
}

