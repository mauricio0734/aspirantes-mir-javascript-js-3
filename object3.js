const receta = {};
//Agregar 
receta.nomber = 'Sandwich'
receta.ingredientes = []

receta.ingredientes.push({nomber: 'Pan', cantidad: 2});
receta.ingredientes.push({nomber: 'Queso', cantidad: 12});

console.log(receta.ingredientes[0].nomber);

let total = 0;
for(const {cantidad} of receta.ingredientes){
total += cantidad;
}
console.log(total);