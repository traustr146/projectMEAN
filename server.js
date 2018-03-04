var express=require('express')
var app=express()

//evironment initialization
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

//view engine setup
app.set(views, __dirname+'/server/views')
app.set('view engine','pug')

app.get('*',function(req,res){
    res.render('index')
})

var port =3000
app.listen(port,function(){
    console.log('server is runnnign on the port '+port+"...");
})
console.log('server is runnnign on the port '+port+"...");

