// Ejemplo 3: Encontrar un objeto con una propiedad específica
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];
const personaEncontrada = personas.find((persona) => persona.nombre === "María");
console.log(personaEncontrada);
   // Resultado: { nombre: "María", edad: 30 }