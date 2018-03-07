var express=require('express')
var stylus=require('stylus')
var app=express()

//evironment initialization
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

//view engine setup
app.set('views', __dirname+'/server/views')
app.set('view engine','pug')

//configuring the stylus middleware
function compile(str,path){
    return stylus(str).set('filename',path);
}

app.use(stylus.middleware(
    {
    src:__dirname+'/public',
    compile:compile
    }
))
app.use(express.static(__dirname+'/public'))

app.get('*',function(req,res){
    res.render('index')
})

var port =3000
app.listen(port,function(err){
    if (err){
        console.log(err);
    }    
    else{
        console.log('server is running on the port '+port+"...");
    }
})

