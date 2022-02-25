const fs = require("fs")
const data = require("./data.json")

exports.show = (req, res)=>{
   const {id} = req.params 
   const encontrado = data.instuctors.find((instructor)=>{
      return instructor.id == id
   })
   if(!encontrado){
      return res.send("Não existe este usuário")
   }
   const instructor = {
   ...encontrado,
   services: encontrado.services.split(","),
   gender: "",
   created_at: ""
   }
   return res.render("instructors/show", { instructor: instructor})
   
};

exports.post = function (req, res) {
   const keys = Object.keys(req.body)
   for (const key of keys) {
      if (req.body[key] == ""){ // verifica se as chaves estão vazias 
         return res.send("Preencha todos os campos")
      }
   }
   req.body.id = Number(data.instuctors.length + 1)  // armazena o id, dizendo que é um numero 
   // req.body.created_at = Date.now() //armazenando a data atual
   req.body.birth = Date.parse(req.body.birth) // transforma a data
   const {  nomel, endereco, bairro, cidade, birth, id, idade, cpf, rg, gender, natal, celular, email, horarioDisponivel, horarioTrabalho, empregado, ecola, serie, turno, camisa, calca,
      saia, blusa, sapato, obs } = req.body // desestruturando

   data.instuctors.push({
      nomel, endereco, bairro, cidade, birth, id, idade, cpf, rg, gender, natal, celular, email, horarioDisponivel, horarioTrabalho, empregado, ecola, serie, turno, camisa, calca,
      saia, blusa, sapato, obs
   })

   // Criando arquivo json
   fs.writeFile("data.json", JSON.stringify(data , null, 2), function (err) {
      if(err){
         return res.send("Erro!!!")

      }
      return res.redirect("/instructors")
   })
   //  return res.send(req.body)
 }