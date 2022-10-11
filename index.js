//---------------------------//
//           let             //
//---------------------------//
// let lenguaje = "Javascript"


//---------------------------//
//           Const           //
//---------------------------//


//---------------------------//
//      Template String      //
//---------------------------//
// - Funciones
// - Arreglos 
// - 

// console.log("Proyectosss");

import {materias} from "./materias.js";
import pkg from 'colors'
// console.log(materias);

//Métodos de los objeto arreglo 
//forEach: Recorre un arreglo
// materias.forEach(function(materias){
//     // if(materias.tipo === 'técnica'){
//         // console.log(`Profesor ${materias.teacher}`. cyan)
//         // console.log(`Clase ${materias.class}`. blue)
//     // }
// })

//map: Construye un arreglo con base en otro
const profesores = materias.map((materias)=>{
    return materias.teacher
})

//Find: Encontrar la primera ocurrencia (Elemeto)
//      que cumpla con la criteria dada

// const PHP = materias.filter((materias)=>{
//     return materias.teacher === "Luis Cabrera"
// })


//psuh: Agrgar un elemento a un arreglo:
// materias.push({
//     id:4,
//     class: "Diseño Front-End",
//     teacher: "Julian Urrea",
//     tipo: "técnica",
//     Notes: [
//         4.5,
//         5,
//         4.8
//     ]
// })

//splice: eliminar 
const removed = materias.splice(3,1)
// console.log(removed)

//Actualizar
// console.log(PHP)
const actualizar = materias.splice(3,1,"Base de datos","Fernando","técnica",[3.3,4.2,1])
console.log (materias) 