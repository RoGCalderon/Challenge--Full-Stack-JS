
alert('Bienvenido a juego');
let numeroAleatorio = Math.round(Math.random()*1000); 
//math.round redondea el número aleatorio que se genera con math.random
//Para que math.random genere números aleatorios hasta mil multiplico por 1000
let numIngresado = parseInt(prompt('Adivine!Ingrese un número entre 0 y 1000'));
if(numIngresado == numeroAleatorio){
    alert('Usted acertó el número');
}

while(numIngresado !== numeroAleatorio){
    
    if (numIngresado <= numeroAleatorio) {
        alert('El número que ingresó es menor');
        numIngresado = parseInt(prompt('Adivine nuevamente!Ingrese un número'));
    }else if (numIngresado >= numeroAleatorio){
        alert('El número que ingresó es mayor');
        numIngresado = parseInt(prompt('Adivine nuevamente!Ingrese un número'));
    }
    

}
