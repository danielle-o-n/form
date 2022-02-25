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


app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
// servidor.listen(5000,()=>{
//     console.log("server is run");
// })

