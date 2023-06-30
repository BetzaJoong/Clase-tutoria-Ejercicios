// Ejemplo 3: Verificar si algún objeto cumple una condición específica
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];
const algunaPersonaMayor = personas.some((persona) => persona.edad > 30);
console.log(algunaPersonaMayor);
   // Resultado: false
