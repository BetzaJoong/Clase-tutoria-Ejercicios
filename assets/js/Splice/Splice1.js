// Ejemplo 1: Eliminar elementos de un array usando splice
const numeros = [1, 2, 3, 4, 5];
// Eliminar los elementos en el índice 2 y 3
const elementosEliminados = numeros.splice(2, 2);
console.log(numeros);
// Resultado: [1, 2, 5]
console.log(elementosEliminados);
// Resultado: [3, 4]