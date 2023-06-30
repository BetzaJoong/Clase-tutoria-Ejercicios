// Ejemplo 1: Encontrar el primer número par en un array
const numeros = [1, 3, 5, 7, 8, 9, 10];
const primerNumeroPar = numeros.find((numero) => numero % 2 === 0);
console.log(primerNumeroPar);
// Resultado: 8