import {materias} from "./materias.js";


//splice: eliminar 
const removed = materias.splice(3,1)
// console.log(removed)

//Actualizar
// console.log(PHP)
const actualizar = materias.splice(3,1,"Base de datos","Fernando","técnica",[3.3,4.2,1])
console.log (materias) 