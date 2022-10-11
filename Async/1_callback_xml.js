//1. crear XML
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://restcountries.com/v3.1/all';

function exito(response){
    console.log(JSON.parse(response))
}

function fallo(status){
    console.log(status)
}
function get_data(endpoint, exito, fallo){
    //2. Conexión a la API
    let http = new XMLHttpRequest()

    //3. Abrir conexión a la API
    http.open('get' , endpoint)

    //4. Eviar solicitud (Request) a la API
    http.send()

    //5. Tratamiento de Response 
    http.onload = function(){
        exito(http.responseText)
    }
}

//invocar function
get_data(endpoint , exito, fallo)
