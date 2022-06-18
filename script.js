const mario = document.querySelector('.mario');
const obstaculo = document.querySelector('.obstaculo');
const cenario = document.querySelector('.game-board h1');


const pulo = () => {
    mario.classList.add('pulo');
    setTimeout(() => {         //O setTimeout serve para executar uma função ou instrução quando atingir o seu tempo.
        mario.classList.remove('pulo');


    }, 500);
}

    document.addEventListener('keydown', pulo);


    const verificador = setInterval(() => {      //Vai verificar se bateu no tubo
    const posicaoTubo = obstaculo.offsetLeft; //offsetLeft faz a leitura da distância do canto superior esquerdo do elemento atual.


    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px',' '); // O '+' tranforma a string em numero. O replace tira o px do 112px.

    if (posicaoTubo <= 112  && posicaoTubo > 0 && posicaoMario < 100) {
        obstaculo.style.animation = 'none'; //Assim que atingir 112, a animação para,bem como a posição do tubo que ficar estatico no local 112px.
        obstaculo.style.left = `${posicaoTubo}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;
        mario.src ='midia/game-over.png';
        mario.style.width = '80px'
        mario.style.marginLeft = '34px'
        clearInterval(verificador);
        
    }

}, 10);

//game-board.innerText =' ';