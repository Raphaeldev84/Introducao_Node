//Core modules = módulos embutidos

//Módulo operacional system (os)
const os = require("os");
const fs = require("fs")

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.version());
// console.log(os.uptime());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.cpus().length);
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.userInfo());

//Módulo fs = filesystem


//Escreve o texto em um novo arquivo
// fs.writeFileSync("./batata.txt", "BATATA ÉBOM DEMAIS");

// const arquivo = fs.readFileSync("./batata.txt");
// console.log(arquivo.toString)

const arquitetura = os.arch();
const plataforma = os.platform();
const usuario = os.hostname();
const versao = os.version();

fs.writeFileSync(
  "./os-info.txt",
  `${arquitetura}\n${plataforma}\n${usuario}\n${versao}`
);

