const express = require ('express');
app.use(express.json());
const app = express()

app.listen(3000)
//serão armanezados os nomes dentro da minha array.
const nomes = []

//criar 
app.get('/get', (response, request)=>{
  return response.json(nomes)
})

//ler
app.post('/post', (response, request)=>{
    const {name} = request.body
    nomes.push(name)
    
   return response.json(nomes) 
})

//atualizar
app.put('/put', (request,response)=>{
    const {index} = request.params
    const {name} = request.body

   nomes[index] = name;
   
   return response.json(nomes)
})

//deletar
app.delete('/delete', (response, request)=>{
    const [index] = request.params
    nomes.splice(index, 1)
    return response.send({message: 'deletado com sucesso '})
})