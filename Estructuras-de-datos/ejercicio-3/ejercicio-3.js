let array=[3,5,4,[[12,3,4,[3,9]]],6,7,[2,6,1,[[12,[20]],1]]];
let array2=[4,3,6,[5,7,1,10,9,[1,12],7,8]];
//el método recursivo se llama dentro del mismo método

function sumaRecursiva(array){ 
    let sumaArray = 0; //Inicializo la variable suma en cero
    for(let i in array){ //dentro de este for uso is array para ver si uno de los elementos is array es array
        if(Array.isArray(array[i])) sumaArray +=sumaRecursiva(array[i])
        //utilizo is array para ver si hay un array dentro del mismo array,si es array entra a la posicion i
        // a suma array le agrego la suma recursiva
        else sumaArray += array[i]; 
    }
    return sumaArray;
}

console.log(sumaRecursiva(array));
console.log(sumaRecursiva(array2));
