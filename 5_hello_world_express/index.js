const express = require("express");

//Define uma aplicação backend em Express
//Recursis pré-configurados
const app = express();

//Define um roteamento
//Manipulador
app.get("/", (requisicao, resposta) => {
    resposta.send("Hello, world!");
});

//Inicializa a escuta de requisições do servidor
app.listen(3000);