const express = require("express");
const fs = require("fs")
const CPF = require("cpf");
//Define uma aplicação backend em Express
//Recursis pré-configurados
const app = express();

//Define um roteamento
//Manipulador
app.get("/", (requisicao, resposta) => {
    resposta.send("<h2>Hello, world!</h2>");
});

app.get("/teste", (req, res) =>{  
    // manipulador de rota
    // req = objeto com dados do cliente/solicitante
    // res = objeto com dados p/ resposta do servidor
    res.send("<p>O que deseja amigo?</p>");
})

app.get("/batata", (req, res) =>{
    res.send("BATATA!");
})

app.get("/inicio", (req, res) =>{
    const arquivo = fs.readFileSync("./inicio.html");
    res.send(arquivo.toString());
})

app.get("/ajuda", (req, res) =>{
    const arquivo = fs.readFileSync("./ajuda.html");
    res.send(arquivo.toString());
})

app.get("/funcionarios/:cpf" , (req, res) =>{
    // req.params = guarda todos os paramentros de rota
    console.log(req.params.cpf);
    const cpf = req.params.cpf;
    res.send(`Funcionário eoncontrado: ${cpf}`);
});

app.get("/pessoas/:nome/:empresa", (req, res) => {
    //const nome = req.params.nome;
    //const empresa = req.params.empresa;
    const { nome, empresa } = req.params;
    res.send(`${nome}, ${empresa}`)
})

// Exercício 1

app.get("/imc/:peso/:altura", (req, res) =>{
    const peso = Number(req.params.peso);
    const altura = Number(req.params.altura);
    const imc = peso / (altura * altura);
    res.send(`<p>IMC: ${imc.toFixed(2)}</p>`);
});

// Exercício 2
app.get("/funcionario/:cpf", (req, res) =>{
    const {cpf} = req.params;
    if(CPF.isValid(cpf)) {
        res.status(200).send(`CPF: ${cpf} válido.`)
    } else {
        res.status(400).send(`CPF: ${cpf} inválido.`)
    }
});

// Exercício 3
app.get('/cpfs/:numero', (req, res) => {
    const {numero} = req.params;
  
    const array = [];
    for (let i = 0; i < numero; i++) {
      array.push(CPF.generate());
    }
  
    res.send(`${array.map(
    (cpf) => `<p>${cpf}</p>`
    ).join('\n')}`)
  
  });


//Inicializa a escuta de requisições do servidor
app.listen(3000);