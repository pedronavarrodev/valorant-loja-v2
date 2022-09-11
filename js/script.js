// Tempo que expira as promoções
let deadline = new Date(`Sep 11, 2022 15:53:00`).getTime();

let intervalo = setInterval(function() {
let now = new Date().getTime()
let tempo = deadline - now
let dias = Math.floor(tempo / (1000 * 60 * 60 * 24))
let horas = Math.floor((tempo%(1000 * 60 * 60 * 24))/(1000 * 60 * 60))
let minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60))
let segundos = Math.floor((tempo % (1000 * 60)) / 1000)

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

        let codigoArmas1 = Math.floor(Math.random() * 5)
        let codigoArmas2 = Math.floor(Math.random() * 5)
        let codigoArmas3 = Math.floor(Math.random() * 5)
        let codigoArmas4 = Math.floor(Math.random() * 5)

        clearInterval(intervalo);
        // document.querySelector(".promo").innerHTML = "A promoção expirou! &nbsp ";
        // document.querySelector(".promo").innerHTML = `Mudou as armas`;
        document.querySelector(".promo").innerHTML = `${dias}`;
        document.querySelector(".ofertas").innerHTML = "";


        textoPrimeiraArma.innerHTML = `${armas[codigoArmas1].nome}`
        PrimeiraArma.setAttribute('src', `${armas[codigoArmas1].imagem}`);

        textoSegundaArma.innerHTML = `${armas[codigoArmas2].nome}`
        SegundaArma.setAttribute('src', `${armas[codigoArmas2].imagem}`);

        textoTerceiraArma.innerHTML = `${armas[codigoArmas3].nome}`
        TerceiraArma.setAttribute('src', `${armas[codigoArmas3].imagem}`);

        textoQuartaArma.innerHTML = `${armas[codigoArmas4].nome}`
        QuartaArma.setAttribute('src', `${armas[codigoArmas4].imagem}`);
    }

}, 1000);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function adicionarDia {

// }

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


const armas = [
    {
        nome: "Classic",
        imagem: "./img/armas/classic.png",
        valor: "1280",
        tipo: "raro"
    },
    {
        nome: "Shorty",
        imagem: "./img/armas/shorty.png",
        valor: "780",
        tipo: "comum"
    },
    {
        nome: "Ghost",
        imagem: "./img/armas/ghost.png",
        valor: "780",
        tipo: "comum"
    },
    {
        nome: "Frenzy",
        imagem: "./img/armas/frenzy.png",
        valor: "780",
        tipo: "comum"
    },
    {
        nome: "Sheriff",
        imagem: "./img/armas/sheriff.png",
        valor: "780",
        tipo: "comum"
    },
]



// addEventListener('click', function() {
//     textoPrimeiraArma.innerHTML = `${armas[1].nome}`
//     PrimeiraArma.setAttribute('src', `${armas[1].imagem}`);

// })



// console.log(armas[0].imagem)