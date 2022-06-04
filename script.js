const mario = document.querySelector('.mario');
const obstaculo = document.querySelector('.obstaculo');


const pulo = () => {
    mario.classList.add('pulo');
    setTimeout(() => {         //O setTimeout serve para executar uma função ou instrução quando atingir o seu tempo.
        mario.classList.remove('pulo');


    }, 500);
}

document.addEventListener('keydown', pulo);

//A function 'const pulo' tem o trabalho de adicionar a class pulo a imagem do mario(classe essa criada no css).Logo em seguinda, o setTimeout será a funtion que vai verificar o pulo assim que eu bate o tempo de 500ms. Quando isso acontecer,a classe pulo é retirada na img do mario pelo 'remove', isso se repeti como um loop. Possibilitando que o ciclo se resove cada ver que o usuario click para o mario pular, levando ele a fazer isso por mais vezes.  

const verificador = setInterval(() => {      //Vai verificar se bateu no tubo
    const posicaoTubo = obstaculo.offsetLeft; //offsetLeft faz a leitura da distância do canto superior esquerdo do elemento atual.

    //getComputedStyle vai pegar o estilo que foi computado na img do mario,no caso bottom. Com isso teremos a informação da altura que o mario não pode ficar apara ñ bater no obstaculo.

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

