import {materias} from "./materias.js";

const profesores = materias.map((materias)=>{
    return materias
})

console.log(profesores)

//splice: eliminar 
const eliminar = materias.splice(1)

console.log(eliminar)

//Actualizar
// console.log(PHP)
// materias.findIndex((materias)=>{
//     if(materias.id == 1){
//         materias.class ="Cultura Fisica"
//         materias.teacher="Luis "
//         materias.tipo="Tranversal"
//         materias.Notes= [4.0,5.0,3.0]
//     }
//     return materias;
//  })

// console.log (materias) 