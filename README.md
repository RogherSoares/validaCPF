# Validador de CPF

Projeto desenvolvido em sala de aula com o objetivo de aplicar conhecimentos de **HTML**, **CSS** e **JavaScript** em um formulário interativo que valida números de CPF.

## 📌 Descrição

Este projeto consiste em uma aplicação web simples onde o usuário insere um CPF no campo indicado e o sistema verifica automaticamente se o número é válido conforme a regra dos dígitos verificadores.

## 🛠 Tecnologias Utilizadas

- **HTML5**: estrutura da página
- **CSS3**: estilização da interface
- **JavaScript (Vanilla JS)**: lógica de validação do CPF

## 🚀 Funcionalidades

- Campo de entrada para CPF com formatação sugerida (Ex: `123.456.789-09`)
- Validação automática com base nos dois dígitos verificadores do CPF
- Exibição de mensagens de sucesso ou erro
- Estilo visual limpo e responsivo

## 💡 Como funciona a validação

A função `validarCPF(cpf)`:

1. Remove caracteres não numéricos.
2. Verifica se o CPF possui 11 dígitos e não é uma sequência repetida.
3. Calcula os dois dígitos verificadores com base nas regras oficiais da Receita Federal.
4. Retorna `true` se for válido, ou `false` caso contrário.

## 📁 Estrutura de Arquivos
```
📦 validador-cpf
├── index.html         # Página principal
├── style.css          # Estilização da página
└── script.js          # Validação do CPF
```

## 🧪 Como usar

Clone este repositório:

git clone https://github.com/RogherSoares/validaCPF.git <br>
Abra o arquivo index.html em seu navegador. <br>
Digite um CPF no campo indicado e clique em Validar.
