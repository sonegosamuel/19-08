const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual foi o primeiro videogame de sucesso comercial?",
        alternativas: [
            {
            
            texto: "alternativa A) Atari 2600",
            afirmacao: "errou"
            },
            {
            texto: "Alternativa B) Magnavox Odyssey",
            afirmacao: "acertou"
            }
            
        ]
    },
    {
        enunciado: "Em qual jogo podemos encontrar o personagem Link?",
        alternativas: [
            {
                texto: "alternativa A) The Elder Scrolls V: Skyrim",
                afirmacao: "errou"
            },
            {
                texto: "alternativa B) The Legend of Zelda",
                afirmacao: "acertou"
            }
        ]
    },
    {
        enunciado: "Qual e o nome do protagonista de Halo",
        alternativas: [
            {
                texto: "alternativa A) Master Chief",
                afirmacao: "acertou"
            },
            {
                texto: "alternativa B) Commander Shepard",
                afirmacao: "errou"
            }
        ]
    },
    {
        enunciado: "Qual e o nome do jogo que popularizou o genero Battle Royale?",
        alternativas: [
            {
                texto: "alternativa A) Fortnite",
                afirmacao: "errou"
            },
            {
                texto: "alternativa B) PlayerUnknowns Battlegrounds (PUBG)",
                afirmacao: "acertou"
            }
        ]
    },
    {
        enunciado: "Qual jogo foi o responsavel por criar o genero de survival horror?",
        alternativas: [
            {
                texto:"alternativa A)  Silent Hill",
                afirmacao:"acertou"
            },
            {
                texto: "alternativa B) Resident Evil",
                afirmacao: "errou"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return; 

    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
            
        caixaAlternativas.appendChild(botaoAlternativa);
    }

}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes
    historiaFinal = afirmacoes + "";
    atual++;
mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "muito obrigado pela participação";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
