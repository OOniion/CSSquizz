document.addEventListener("DOMContentLoaded", () => {  // Aguarda o HTML carregar
const startButton = document.getElementById("start-button");
const startContainer= document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

// Para armazenar os elementos em variáveis

 const questions = [
    {
        question: "1. O que significa CSS?",
        answer: [
            {text: "Computer Style Sheets", correct: false},
            {text: "Creative Style System", correct: false}, 
            {text: "Cascading Style Sheets", correct: true},
            {text: "Custom Styling Syntax", correct: false},         
        ]
    },
    {
        question: "Qual propriedade é usada para alterar a cor do texto?",
        answer: [
            {text: " text-color", correct: false},
            {text: "color", correct: true}, 
            {text: "font-color", correct: false},
            {text: "background-color", correct: false},         
        ]  
    },
    {
        question: "Como se aplica um estilo a todos os parágrafos (<p>) de uma página?",
        answer: [
            {text: "p { style: all; }", correct: false},
            {text: "<p style="*">", correct: false}, 
            {text: "p { apply: all; }", correct: false},
            {text: "p { color: red; }", correct: true},         
        ]  
    },
    {
        question: "Qual valor da propriedade position fixa um elemento na tela ao rolar a página?",
        answer: [
            {text: "static", correct: false},
            {text: "absolute", correct: false}, 
            {text: "fixed ", correct: true},
            {text: "relative", correct: false},         
        ]  
    },
    {
        question: "Como criar um comentário em CSS?",
        answer: [
            {text: "<!-- Este é um comentário -->", correct: false},
            {text: "/* Este é um comentário */", correct: true}, 
            {text: "// Este é um comentário", correct: false},
            {text: "# Este é um comentário", correct: false},         
        ]  
    },
    {
        question: "Qual propriedade define o espaço interno de um elemento?",
        answer: [
            {text: "margin", correct: false},
            {text: "padding ", correct: true}, 
            {text: "border", correct: false},
            {text: "spacing", correct: false},         
        ]  
    },
    {
        question: "Qual seletor CSS é usado para selecionar todos os elementos de um tipo específico?",
        answer: [
            {text: "#elemento", correct: false},
            {text: "elemento ", correct: true}, 
            {text: ".elemento", correct: false},
            {text: "*elemento", correct: false},         
        ]  
    },
    {
        question: "Qual unidade de medida é relativa ao tamanho da fonte do elemento pai?",
        answer: [
            {text: "px", correct: false},
            {text: "em ", correct: true}, 
            {text: "cm", correct: false},
            {text: "vh", correct: false},         
        ]  
    },
    {
        question: "Qual propriedade é usada para arredondar os cantos de um elemento?",
        answer: [
            {text: "round-corner", correct: false},
            {text: "corner-radius", correct: false}, 
            {text: "border-radius", correct: true},
            {text: "border-corner", correct: false},         
        ]  
    },
    {
        question: "Qual propriedade controla a transparência de um elemento?",
        answer: [
            {text: "transparency", correct: false},
            {text: "visibility", correct: true}, 
            {text: "opacity ", correct: false},
            {text: "transparent", correct: false},         
        ]  
    }
];
// um array de objetos para armazenar as perguntas e respostas

let currentQuestionIndex = 0; //controla a pergunta mostrada
let score = 0;// armazena a pontuação

startButton.addEventListener ("click", () => {
    startContainer.classList.add("hidden");// Esconde a tela inicial
    questionContainer.classList.remove("hidden");//Mostra as perguntas
    startQuiz();//inicia o quizz
});

function startQuiz() {
    currentQuestionIndex =0;//começa na primeira pergunta
    score=0;//Zero pontuação
    nextButton.classList.add("hidden");//esconde o next
    showQuestion();//Chama a função para mostrar a pergunta
}
function showQuestion() {
    resetState(); // Limpa as respostas anteriores
    let currentQuestion = questions[currentQuestionIndex]; // Pega a pergunta atual
    if (!currentQuestion) {
        console.error("Erro pergunta não encontrada");
        return;
    }
    questionElement.innerText = currentQuestion.question; // Exibe a pergunta

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button"); // Cria um botão para cada resposta
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct)); // Adiciona evento de clique
        answerButtons.appendChild(button); // Adiciona o botão na tela
    });
}
function resetState() {
    nextButton.classList.add("hidden"); // Esconde o botão "Próxima"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Remove os botões antigos
    }
}
function selectAnswer(button, correct) {
    if (correct) {
        button.classList.add("correct"); // Destaca a resposta correta em verde
        score++; // Aumenta a pontuação
    } else {
        button.classList.add("wrong"); // Destaca a resposta errada em vermelho
    }

    // Desabilita todos os botões após uma resposta
    Array.from(answerButtons.children).forEach(btn => {
        btn.disabled = true;
    });

    nextButton.classList.remove("hidden"); // Mostra o botão "Próxima"
}
nextButton.addEventListener("click", () => {
    currentQuestionIndex++; // Vai para a próxima pergunta
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Exibe a nova pergunta
    } else {
        alert(`Quiz finalizado! Você acertou ${score} de ${questions.length}.`);
        location.reload(); // Recarrega a página para reiniciar
    }
});
})

 const questions = [
    {
        question: "pergunta1?",
        answer: [
            {text: "resposta1", correct: false},
            {text: "resposta2", correct: true}, 
            {text: "resposta3", correct: false},
            {text: "resposta4", correct: false},         
        ]
    },
    {
        question: "pergunta",
        answer: [
            {text: "resposta", correct: false},
            {text: "resposta", correct: true}, 
            {text: "resposta", correct: false},
            {text: "resposta", correct: false},         
        ]  
    }
];
// um array de objetos para armazenar as perguntas e respostas

let currentQuestionIndex = 0; //controla a pergunta mostrada
let score = 0;// armazena a pontuação

startButton.addEventListener ("click", () => {
    startContainer.classList.add("hidden");// Esconde a tela inicial
    questionContainer.classList.remove("hidden");//Mostra as perguntas
    startQuiz();//inicia o quizz
});

function startQuiz() {
    currentQuestionIndex =0;//começa na primeira pergunta
    score=0;//Zero pontuação
    nextButton.classList.add("hidden");//esconde o next
    showQuestion();//Chama a função para mostrar a pergunta
}
function showQuestion() {
    resetState(); // Limpa as respostas anteriores
    let currentQuestion = questions[currentQuestionIndex]; // Pega a pergunta atual
    if (!currentQuestion) {
        console.error("Erro pergunta não encontrada");
        return;
    }
    questionElement.innerText = currentQuestion.question; // Exibe a pergunta

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button"); // Cria um botão para cada resposta
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct)); // Adiciona evento de clique
        answerButtons.appendChild(button); // Adiciona o botão na tela
    });
}
function resetState() {
    nextButton.classList.add("hidden"); // Esconde o botão "Próxima"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Remove os botões antigos
    }
}
function selectAnswer(button, correct) {
    if (correct) {
        button.classList.add("correct"); // Destaca a resposta correta em verde
        score++; // Aumenta a pontuação
    } else {
        button.classList.add("wrong"); // Destaca a resposta errada em vermelho
    }

    // Desabilita todos os botões após uma resposta
    Array.from(answerButtons.children).forEach(btn => {
        btn.disabled = true;
    });

    nextButton.classList.remove("hidden"); // Mostra o botão "Próxima"
}
nextButton.addEventListener("click", () => {
    currentQuestionIndex++; // Vai para a próxima pergunta
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Exibe a nova pergunta
    } else {
        alert(`Quiz finalizado! Você acertou ${score} de ${questions.length}.`);
        location.reload(); // Recarrega a página para reiniciar
    }
});
