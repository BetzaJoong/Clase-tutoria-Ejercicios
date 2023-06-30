function encontrarValoresRepetidos(arreglo) {
    const valoresRepetidos = [];
    const contador = {};
    // Contar la frecuencia de cada elemento en el arreglo
    for (let i = 0; i < arreglo.length; i++) {
        const elemento = arreglo[i];
        contador[elemento] = (contador[elemento] || 0) + 1;
    }
    // Buscar los elementos con frecuencia mayor a 1
    for (const elemento in contador) {
        if (contador[elemento] > 1) {
            valoresRepetidos.push(elemento);
        }
    }
    return valoresRepetidos;
}

// Ejemplo de uso
const arreglo = [1, 2, 3, 4, 2, 5, 3, 6, 4, 4];
const valoresRepetidos = encontrarValoresRepetidos(arreglo);
console.log("Valores repetidos:", valoresRepetidos);
// Resultado: Valores repetidos: [2, 3, 4]
