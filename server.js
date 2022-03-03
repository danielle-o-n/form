const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const servidor = express();

servidor.use(express.urlencoded({ extended: true }))
servidor.use(express.static('public')) // USE middlewares (liga ponto A  ao B)
servidor.use(routes)

servidor.set("view engine","njk");

nunjucks.configure("view", {
    express: servidor,
    autoescape: true,
    noCache: true
})


const PORT = process.env.PORT || 5000;

servidor.listen(PORT, ()=>{
    console.log("A PORTA e" + PORT);
})

