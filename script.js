const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "const myVar = 10;",
            "let myVar = 10;",
            "var myVar = 10;",
        ],
        correta: 2
    },
    {
        pergunta: "Qual função é usada para imprimir uma mensagem no console em JavaScript?",
        respostas: [
            "print()",
            "log()",
            "console.log()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual operador é usado para comparar o valor e o tipo em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1
    },
    {
        pergunta: "Como você chama uma função chamada 'myFunction'?",
        respostas: [
            "call myFunction()",
            "invoke myFunction()",
            "myFunction()",
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'parseInt()' faz em JavaScript?",
        respostas: [
            "Analisa uma string e retorna um número inteiro.",
            "Analisa uma string e retorna um número decimal.",
            "Analisa uma string e retorna um valor booleano.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
        respostas: [
            "for (i = 0; i < 5; i++)",
            "for (i < 5; i++)",
            "for (i = 0; i <= 5)",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
        respostas: [
            "10",
            "55",
            "Erro",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método de string que é usado para juntar os elementos de uma matriz em uma string?",
        respostas: [
            "join()",
            "concat()",
            "merge()",
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador '&&' faz em JavaScript?",
        respostas: [
            "Operador de negação lógica",
            "Operador de adição",
            "Operador de conjunção lógica",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o método usado para adicionar um elemento ao final de uma matriz em JavaScript?",
        respostas: [
            "push()",
            "add()",
            "append()",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            // exclua caso seleciona a resposta errada ao retornar na pergunta
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }
    // remover o exemplo do span "Resposta A"
    quizItem.querySelector('dl dt').remove()

    // mostrar a pergunta na tela
    quiz.appendChild(quizItem)
}