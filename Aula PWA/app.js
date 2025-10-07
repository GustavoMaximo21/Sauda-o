const saudacao = document.getElementById('saudacao');
const frase = document.getElementById('frase');
const icone = document.getElementById('icone');

const fraseManha = [
    'Acorda pobre',
    'Bom dia! Café na mão e paciência em falta.',
    'ta atrasado hein',
    'Que seu dia seja tão bom quanto dormir até tarde.'
];

const fraseTarde = [
    'Hora da boia',
    'Tarde começando e a produtividade continua de férias!',
    'Sorria, a tarde está só começando!',
    'Se a tarde tivesse um botão de soneca, eu apertava!'
];

const fraseNoite = [
    'Hora de dormir',
    'travesseiro me chamou e eu fui. Boa noite!',
    'Durma bem e bons sonhos',
    'Boa noite! Até amanhã, se o despertador deixar.'
];

function atualizarSaudacao(){
    const hoje = new Date();
    const hora = hoje.getHours();
    let msgSaudacao, imgFundo, imgIcone, frasesDoMomento;
    if (hora>= 5 && hora < 12){
        msgSaudacao = 'Bom Dia';
        imgFundo = "url(bomdia.jpg)";
        imgIcone = "xicara.jpg";
        frasesDoMomento = fraseManha;
    
    } else if (hora >= 12 && hora <18){
        msgSaudacao = 'Boa tarde';
        imgFundo = "url(boatarde.jpg)";
        imgIcone = "sol.png";
        frasesDoMomento = fraseTarde;

    } else {
        msgSaudacao = 'Boa Noite';
        imgFundo = "url(boanoite.webp)";
        imgIcone = "lua.png";
        frasesDoMomento = fraseNoite;
    }

    saudacao.textContent =msgSaudacao;
    document.body.style.backgroundImage = imgFundo;
    icone.src = imgIcone
    const randomIndex = Math.floor(Math.random() *frasesDoMomento.length);
    frase.textContent = frasesDoMomento[randomIndex];

}
atualizarSaudacao();
setInterval(atualizarSaudacao, 5000);


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Erro no Service Worker:", err));
}




