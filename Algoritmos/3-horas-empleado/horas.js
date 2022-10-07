
let valor_hora = parseInt(prompt('Ingrese el valor de la hora:'));
let nombre_empleado= prompt('Ingrese nombre del empleado:');
let antiguedad = parseInt(prompt('Ingrese antigüedad:'));
let cant_horas = parseInt(prompt('Ingrese la cantidad de horas trabajadas: '));

if(antiguedad>10){
    let importe = (valor_hora*cant_horas) + (antiguedad*30);
    alert(nombre_empleado+' '+'su antiguedad es :'+antiguedad+' '+ ' años y el total a cobrar es:'+' '+ importe);
} else {
    importe = valor_hora*cant_horas;
    alert(nombre_empleado+' '+'su antiguedad es :'+antiguedad+' '+ ' años, y el total a cobrar es:'+' '+ importe);
}


    