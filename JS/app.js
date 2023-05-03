const nome = document.querySelector('#nome'); //campo do nome
const peso = document.querySelector('#peso'); //campo do peso
const altura = document.querySelector('#altura'); //campo da altura
const imcF = document.querySelector('#imc'); //campo do IMC

const botao = document.querySelector('#btn'); //campo do botão
const result = document.querySelector('#resultado'); //campo do resultado do span

botao.addEventListener('click',()=>{
    event.preventDefault();

    if (peso.value !== '' && altura.value !== '' && nome.value !== '') {    
        let imc = peso.value/(altura.value**2);


        imcF.value = imc.toFixed(2);
    } else {
        result.innerHTML = ('Preencha os dados corretamente');
    }
})