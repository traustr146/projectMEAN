//node modules included
var express=require('express')
var stylus=require('stylus')
var morgan=require('morgan')
var bodyParser=require('body-parser')

//express instance creation
var app=express()

//port specification
var port=3000

//evironment initialization
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

//view engine setup
app.set('views', __dirname+'/server/views')
app.set('view engine','pug')

//configuring the stylus middleware
function compile(str,path){
    return stylus(str).set('filename',path);
}
//stylus middleware
app.use(stylus.middleware(
    {
    src:__dirname+'/public',
    compile:compile
    }
))

//morgan middleware 
app.use(morgan('dev'))

//badyparser middleware
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())


//static routing for pubic folder
app.use(express.static(__dirname+'/public'))

//basic routing
app.get('*',function(req,res){
    res.render('index')
})

//port attention
app.listen(port,function(err){
    if (err){
        console.log(err);
    }    
    else{
        console.log('server is running on the port '+port+"...");
    }
})

