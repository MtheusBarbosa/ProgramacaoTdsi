var conexao = require('./conexao')

var AlunoSchema = new conexao.Schema({
    nome:{
        type:String
    },
    endereco:{
        type:String
    },
    telefone:{
        type:String
    }
})

module.exports = conexao.model('Aluno', AlunoSchema)