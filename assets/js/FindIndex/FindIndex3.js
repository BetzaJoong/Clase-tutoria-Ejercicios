// Ejemplo 3: Encontrar el índice de un objeto con una propiedad específica
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];
const indicePersonaEncontrada = personas.findIndex((persona) => persona.nombre === "María");
console.log(indicePersonaEncontrada);
   // Resultado: 1