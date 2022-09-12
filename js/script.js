//////// API

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}


function criaLinha(displayName) {
    
}

// function main() {
//     data = fazGet(`https://valorant-api.com/v1/weapons/skins/`)
//     displayName = JSON.parse(data)
//     console.log(displayName[0])
// }

function main() {
    data = fazGet(`https://valorant-api.com/v1/weapons/skins?language=pt-BR`)
    displayName = JSON.parse(data)
    displayIcon = JSON.parse(data)
    console.log(displayName.data[541].displayName)
}

main()













// Tempo que expira as promoções
let deadline = new Date(`Sep 12, 2022 14:25:20`).getTime();

let interval = setInterval(() => countDown(), 1000);

const countDown = () => {

    let now = new Date().getTime();
    let tempo = deadline - now;
    let dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
    let horas = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((tempo % (1000 * 60)) / 1000);

    if (dias < 10) {
        dias = "0" + dias;
    }
    if (horas < 10) {
        horas = "0" + horas;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    document.querySelector(".promo").innerHTML = `${dias}:${horas}:${minutos}:${segundos}`;


    if (tempo < 0) {

        let codigoArmas1 = Math.floor(Math.random() * 541)
        let codigoArmas2 = Math.floor(Math.random() * 541)
        let codigoArmas3 = Math.floor(Math.random() * 541)
        let codigoArmas4 = Math.floor(Math.random() * 541)

        resetCountdown();
        // document.querySelector(".promo").innerHTML = "A promoção expirou! &nbsp ";
        // document.querySelector(".promo").innerHTML = `Mudou as armas`;
        document.querySelector(".promo").innerHTML = `${dias}`;
        document.querySelector(".ofertas").innerHTML = "";


        textoPrimeiraArma.innerHTML = `${displayName.data[codigoArmas1].displayName}`
        PrimeiraArma.setAttribute('src', `${displayIcon.data[codigoArmas1].displayIcon}`);

        textoSegundaArma.innerHTML = `${displayName.data[codigoArmas2].displayName}`
        SegundaArma.setAttribute('src', `${displayIcon.data[codigoArmas2].displayIcon}`);

        textoTerceiraArma.innerHTML = `${displayName.data[codigoArmas3].displayName}`
        TerceiraArma.setAttribute('src', `${displayIcon.data[codigoArmas3].displayIcon}`);

        textoQuartaArma.innerHTML = `${displayName.data[codigoArmas4].displayName}`
        QuartaArma.setAttribute('src', `${displayIcon.data[codigoArmas4].displayIcon}`);
    }

}

const resetCountdown = () => {

    clearInterval(interval);

    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() + 1);
    deadline = currentDate.getTime();
    interval = setInterval(() => countDown(), 1000);

}

function mudarArmas() {
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() == 0);
    deadline = currentDate.getTime();
    interval = setInterval(() => countDown(), 1000);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TEXTOS ARMAS
let textoPrimeiraArma = document.querySelector('#texto-arma1')
let textoSegundaArma = document.querySelector('#texto-arma2')
let textoTerceiraArma = document.querySelector('#texto-arma3')
let textoQuartaArma = document.querySelector('#texto-arma4')

// IMAGEM ARMAS

let PrimeiraArma = document.querySelector('#arma1')
let SegundaArma = document.querySelector('#arma2')
let TerceiraArma = document.querySelector('#arma3')
let QuartaArma = document.querySelector('#arma4')
