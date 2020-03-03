const express =require('express')
var app = express()
var bodyparser = require('body-parser')
var Aluno = require('./model/aluno')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('listar.ejs',{})
})

app.get('/add',function(req,res){
    res.render('adicionar.ejs',{})
})

app.post('/add',function(req,res){
    var aluno = new Aluno({
        nome:  req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone
    })
    aluno.save(function(err){
        Aluno.find({}).exec(function(e,docs){
        console.log(docs);
        if(err){
            res.render('listar.ejs',{ msg : err, listaAlunos: docs})
        }else{
            res.render('listar.ejs',{ msg: "Salvo", listaAlunos: docs})
        }
         });
    })
})

app.get('/edit',function(req,res){
    res.render('editar.ejs',{})
})

app.listen(3001,function(){
    console.log("Estou escutando na porta 3001!!!")
})