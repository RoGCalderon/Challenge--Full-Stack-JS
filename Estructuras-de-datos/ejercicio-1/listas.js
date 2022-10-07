
let buscaNroArray = (arreglo, num) => {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] !== num) {
        nuevoArreglo.push(arreglo[i]);
      }
    }
    return nuevoArreglo;
  }
  
  console.log(buscaNroArray([1, 2, 7, 3, 9], 2));
  console.log(buscaNroArray([1, 2, 4, 2, 3, 1, 1, 5, 7], 1));
 