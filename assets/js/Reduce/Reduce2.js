// Ejemplo 2: Obtener el número máximo del array
const numeros = [1, 2, 3, 4, 5];
const maximo = numeros.reduce((acumulador, elemento) => {
    return Math.max(acumulador, elemento);
});
console.log(maximo);
   // Resultado: 5