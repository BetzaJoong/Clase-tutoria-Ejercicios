// Ejemplo 3: Filtrar objetos por una condición
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 },
    { nombre: "Luisa", edad: 35 }
];
const personasMayores = personas.filter((persona) => persona.edad > 30);
console.log(personasMayores);
   // Resultado: [{ nombre: "María", edad: 30 }, { nombre: "Luisa", edad: 35 }]