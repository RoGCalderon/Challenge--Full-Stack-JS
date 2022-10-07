let min = 1000;  ///REVISAR
let max = 0;
let suma = 0;

alert('Bienvenido');
let numero = parseInt(prompt('Ingrese un número'));
if (numero === -1){
    alert('Fin de datos');
}else{
    numero=parseInt(prompt('Ingrese otro número'));
    while (numero <= -1 && numero >=0 ){
    
        if(numero>max){
            max= numero;
        }else if(numero< min){
            min = numero;
        }
        suma = suma + numero;

    }

}
alert('El número máximo introducido es '+ max + ', el mínimo es ' + min +' y la suma de todos los número:' + suma);


