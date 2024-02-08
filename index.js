const perguntas = [
    {
      pergunta: "O que significa DOM em JavaScript?",
      respostas: [
        "Documento de Objeto Móvel",
        "Modelo de Objeto de Documento",
        "Documento de Objeto Manipulador"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição de valores",
        "Comparação estritade valores e tipos",
        "Comparação de valores sem considerar o tipo"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um identificador para armazenar valores",
        "Um operador aritmético"
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma função em JavaScript?",
      respostas: [
        "definir função()",
        "função = () =>",
        "function minhaFuncao()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Selecionar um elemento do HTML",
        "Alterar o estilo de um elemento",
        "Criar um novo elemento"
      ],
      correta: 0
    },
    {
      pergunta: "O que significa JSON em JavaScript?",
      respostas: [
        "Java Script Object Notation",
        "JavaScript Oriented Network",
        "JavaScript Object Notation"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "para (i = 0; i < 5; i++)",
        "for (i < 5; i++)",
        "for (i = 0; i < 5)"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "splice()",
        "shift()"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Analisa uma string e retorna um número inteiro",
        "Remove espaços em branco de uma string",
        "Retorna o valor de PI"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(const resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // remove a resposta A que foi usada para clonar
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }