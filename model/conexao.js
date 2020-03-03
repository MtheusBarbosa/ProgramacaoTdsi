const endereco = "mongodb://localhost:27017/aluno"
const mongoose = require('mongoose')

mongoose.connect(endereco, { useUnifiedTopology: true, useNewUrlParser: true})
mongoose.set('useFindAndModify', false)

module.exports = mongoose