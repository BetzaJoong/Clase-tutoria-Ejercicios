// Versión del ejercicio anterior con métodos
function encontrarValoresRepetidos(arreglo) {
    const valoresRepetidos = arreglo.filter((valor, indice) => arreglo.indexOf(valor) !== indice);
    return valoresRepetidos;
}
// Ejemplo de uso
const arreglo = [1, 2, 3, 4, 2, 5, 3, 6, 4, 4];
console.log("Array : ", arreglo);
const valoresRepetidos = encontrarValoresRepetidos(arreglo);
console.log("Valores repetidos:", valoresRepetidos);
const valoresRepetidosUnicos = [...new Set(valoresRepetidos)];
console.log("Valores repetidos unicos:", valoresRepetidosUnicos);
    // Resultado: Valores repetidos unicos: [2, 3, 4]
