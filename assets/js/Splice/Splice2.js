// Ejemplo 2: Reemplazar elementos de un array usando splice
const frutas = ["manzana", "banana", "pera", "uva"];
// Reemplazar los elementos en el índice 1 y 2
const elementosReemplazados = frutas.splice(1, 2, "sandía", "mango");
console.log(frutas);
// Resultado: ["manzana", "sandía", "mango", "uva"]
console.log(elementosReemplazados);
// Resultado: ["banana", "pera"]