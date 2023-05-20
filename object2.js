const persona = {
    nombre: 'Daniel',
    edad: 30,
    ciudad: 'Barranquilla',
    profesion: 'Developed',
}
console.log(persona);

function presentacion(person){
return `Hola, mi nombre es ${person.nombre}, tengo ${person.edad} años, soy de ${person.ciudad} y soy ${person.profesion}`
}

const mensaje = presentacion(persona);
console.log(mensaje);
persona.hobbies = ['Jugar videojuegos', 'Cocinar', 'Jugar con los perros'];
console.log(persona.hobbies);

for(const hobbie of persona.hobbies){
console.log(hobbie);
}