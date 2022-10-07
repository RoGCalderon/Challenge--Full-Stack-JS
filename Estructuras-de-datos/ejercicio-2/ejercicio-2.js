
const reemplazar = (array, num1, num2)=>{ //utilizo una constante para guardar 
  
    for (let i = 0; i < array.length; i++) { //este for recorre las posiciones dentro del array
        if (array[i] === num1) {  //si en la posición [i] es igual a num1,será reemplazado 
          array.splice([i],1,num2);
        }
      }
    return array
} 

console.log(reemplazar([1, 2, 2, 3, 9], 2 ,3)); // devuelve [1, 3, 3, 3, 9]
console.log(reemplazar([1, 2, 4, 2, 3, 1, 1, 5, 7], 1 ,2)); // devuelve [2, 2, 4, 2, 3, 2, 2, 5, 7]
 
