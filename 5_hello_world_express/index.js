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

  app.get("/youtube", (req, res) => {
    const {canal} = req.query;
    res.send("Youtube: " + canal);
  });

  //params = mais restrito a url

  //query = mais flexivel, mas suja muito a url

//Inicializa a escuta de requisições do servidor

//Exercício 1
app.get("/nome",  (req, res) => {
    const {nome} = req.query;

    if(nome) {
        res.send(`Olá, ${nome}!`)
    } else {
        res.status(400).send("Envie o nome corretamente!");
    }
});

app.get("/soma", (req, res) => {
    const { num1, num2} = req.query;
    if((num1 !== undefined) && (num2 !== undefined)) {
        const soma = Number(num1) + Number(num2);
    } else {
        res.status(400).send("Forneça dois números válidos");
    }
})

app.get("/boasvindas", (req, res) => {
    const { lang} = req.query;
    if(lang === "pt") {
        res.send("Bem-vindo!");
    } else if (lang === "en") {
        res.send("welcome!");
    } else {
        res.status(400).send("Idioma não suportado!");
    }
})

const usuarios = require("./usuarios");

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
})

// Exercício V: Crie uma rota "/usuarios/novo", e por meio dos parâmetros de consulta colete nome e email para inserir no array de usuários.


app.get("/usuarios/novo", (req, res) => {
    const { nome, email } = req.query;
    const novoUsuario = { nome: nome, email: email };
    usuarios.push(novoUsuario);
    res.status(201).json({ messagem: "Usuário adicionado" });
  });


app.get("/usuarios/:index", (req, res) => {
    const index = Number(req.params.index);
    const usuariosEncontrado = usuarios[index];
    if(usuariosEncontrado) {
        res.json(usuariosEncontrado);
    } else {
        res.status(404).send({mensagem: "Usuário não encontrado"});
    }
    
})


// Exercício IV: Crie uma rota "/usuarios/email", e filtre o usuário com o email fornecido via parâmetros de rota. Caso não encontre, responda com 404.
// => /usuarios/email/gabriel.braga@soulcode.com

app.get("/usuarios/email/:email", (req, res) =>{
    const {email} = req.params;
    const usuariosEncontrado = usuarios.find(el => el.email === email);
    if(usuariosEncontrado) {
        res.json(usuariosEncontrado);
    } else {
        res.status(404).json({menssagem: "Usuário não encontrado"});
    }

})



app.listen(3000);