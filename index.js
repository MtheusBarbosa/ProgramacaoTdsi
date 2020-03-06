const express =require('express')
var app = express()
var bodyparser = require('body-parser')
var Aluno = require('./model/aluno')
var x;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

app.set('view engine','ejs')


//create get
app.get('/add',function(req,res){
    res.render('adicionar.ejs',{msg: ''})
})

//create post
app.post('/add',function(req,res){
    var aluno = new Aluno({
        nome:  req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone
    })
    aluno.save(function(err){
        
        if(err){
            res.render('adicionar.ejs',{ msg : err})
        }else{
            res.render('adicionar.ejs',{ msg: "Adicionado com sucesso!"})
        }
         });
    })


//read get
app.get('/',function(req,res){
    Aluno.find({}).exec(function(err,docs){
        res.render('listar.ejs',{ listaAlunos: docs, msg: ""})
    })

})

app.get('/edit',function(req,res){
    res.render('editar.ejs',{})
})

//delete get
app.get('/del/:id', function(req,res){
    var aluno = Aluno.findByIdAndDelete(req.params.id, function(err){;
    if(err){
        res.redirect('/')
    } else {
        res.redirect('/')
    }
    });
});


app.listen(3001,function(){
    console.log("Estou escutando na porta 3001!!!")
})