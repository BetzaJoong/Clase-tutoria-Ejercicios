// Ejemplo 1: Sumar todos los elementos del array
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0);
console.log(suma);
// Resultado: 15