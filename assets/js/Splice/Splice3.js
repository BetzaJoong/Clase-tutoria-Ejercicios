// Ejemplo 3: Insertar elementos en un array usando splice
const colores = ["rojo", "azul", "verde"];
// Insertar los elementos "amarillo" y "naranja" en el índice 1
colores.splice(1, 0, "amarillo", "naranja");
console.log(colores);
// Resultado: ["rojo", "amarillo", "naranja", "azul", "verde"]
