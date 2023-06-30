// Ejemplo 3: Concatenar elementos de un array en una cadena
const palabras = ["Hola", "cómo", "estás"];
const frase = palabras.reduce((acumulador, elemento) => {
    return acumulador + " " + elemento;
});
console.log(frase);
// Resultado: "Hola cómo estás"
