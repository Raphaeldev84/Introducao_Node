const usuarios = require('./modulo_usuarios');

function autenticacao (email, senha) {
    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha)
    if (usuario) {
        return true;
    } else {
        return false;
    }
}

module.exports = autenticacao;