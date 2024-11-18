import express from 'express'; // importar express
const app = express();

// Servidor local sendo executado na porta 3000.
app.listen(3000,()=>{
  console.log('servidor escutando...');
});

// Rota (/api) | Get Obter uma informação
app.get('/api',(req, res)=>{
  res.status(200).send("Rota Inicial");
});