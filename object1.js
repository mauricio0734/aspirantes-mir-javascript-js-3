const Pedro ={

    nombre:"Pedro Perez",
    edad: 30,
    activo:  true,
    hobbies: ["programar", "squash", "piano"],

}

Pedro['altura'] = 1.8;
delete Pedro.activo;

function saluda(){
return ' '+ this.nombre;
}

console.log(Pedro.edad);
console.log(Pedro);
console . log ('\n');
console.log(' Hola me llamo: '+ Pedro.nombre);

//Pedro.

//console.log(Pedro)
//for(const prop of Pedro.hobbies){
  //  console.log(prop);
 // }
/*
Pedro['Descripción'] = function(){
return `Hola mi nombre es ${this.nombre}. tengo ${this.edad} años y mis hobbies son: ${this.hobbies.
join(',')}`;
}  */
