const http = require("http");
const os = require("os");
const cpf = require("cpf")

const host = "localhost";
const porta = 3000;

const servidor = http.createServer((requisicao, resposta) =>{
    //O que eu quero responder para quem fez a solicitação
    resposta.write("<h1>Inofrmações do sistema</h1>");
    resposta.write("<hr/>");
    resposta.write(`<p>${os.platform()}, ${os.hostname()}, ${os.version()}, ${os.cpus().length} CPUS </p>`);
    
    resposta.write(`<p>Proprietario: ${cpf.generate()}</p>`);
    // Encerra a comunicação
    resposta.end();
});


//servidor fica esperadno requisições
servidor.listen(porta, host);

/** EXERCÍCIO VI: Escreva na resposta do servidor informações sobre
 * o sistema usando o módulo os.
 */