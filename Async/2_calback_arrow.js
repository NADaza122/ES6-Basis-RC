//1. crear XML
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://restcountries.com/v3.1/all';

const exito = (response) => {
    /*const pais = JSON.parse(response).results
    pais.forEach((pais) => {
        console.log(`Pais: ${pais.capital}`)
        console.log(`------------------`)
    })*/
    console.log(JSON.parse(response))
}

const fallo = (status) => {
    console.log(status)
}

const get_data = (endpoint, exito, fallo) => {
    //2. Conexión a la API
    let http = new XMLHttpRequest()

    //3. Abrir conexión a la API
    http.open('get' , endpoint)

    //4. Eviar solicitud (Request) a la API
    http.send()

    //5. Tratamiento de Response 
    http.onload = () => {
        if(http.status === 200 ){
            exito(http.responseText)
        }else{
            fallo(http.status)
        }
    }
}

//invocar function
get_data(endpoint , exito, fallo)
