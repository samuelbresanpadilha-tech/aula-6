import { aleatorio } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const nomeJogadorElemento = document.querySelector(".nome-jogador");

const nomes = [
"Alex",
"Luna",
"Ravi",
"Maya",
"Noah",
"Sofia",
"Gael",
"Alice",
"Theo",
"Valentina"
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let nomeJogador;

// Sorteia um nome para o personagem
function sorteiaNome() {
nomeJogador = aleatorio(nomes);

nomeJogadorElemento.textContent =
`Seu nome nesta história será: ${nomeJogador}`;
}

// Mostra a pergunta atual
function mostraPergunta() {

if (atual >= perguntas.length) {
mostraResultado();
return;
}

perguntaAtual = perguntas[atual];

caixaPerguntas.textContent = perguntaAtual.enunciado;

caixaAlternativas.textContent = "";

mostraAlternativas();
}

// Cria os botões das alternativas
function mostraAlternativas() {

for (const alternativa of perguntaAtual.alternativas) {

const botaoAlternativas = document.createElement("button");

botaoAlternativas.textContent = alternativa.texto;

botaoAlternativas.addEventListener(
"click",
() => respostaSelecionada(alternativa)
);

caixaAlternativas.appendChild(botaoAlternativas);
}
}

// Quando o jogador escolhe uma alternativa
function respostaSelecionada(opcaoSelecionada) {

const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);

historiaFinal += afirmacoes + " ";

atual++;

mostraPergunta();
}

// Mostra o resultado final
function mostraResultado() {

caixaPerguntas.textContent = `Em 2049, ${nomeJogador}...`;

textoResultado.textContent = historiaFinal;

caixaAlternativas.textContent = "";

caixaResultado.classList.add("mostrar");
}

// Reinicia o jogo
function jogaNovamente() {

atual = 0;

historiaFinal = "";

caixaResultado.classList.remove("mostrar");

sorteiaNome();

mostraPergunta();
}

botaoJogarNovamente.addEventListener(
"click",
jogaNovamente
);

// Começa o jogo
sorteiaNome();

mostraPergunta();