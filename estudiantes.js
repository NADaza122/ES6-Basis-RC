let colors = require('colors');

const estudiantes = {
    id: 1,
    nom: 'Paula',
    ape: 'Rojas',
    tipoDoc: 'C.C',
    numDoc: "103309845"
};

//Destructuración 
let {nom , numDoc} = estudiantes


console.log(nom.cyan)
console.log(numDoc.blue)
