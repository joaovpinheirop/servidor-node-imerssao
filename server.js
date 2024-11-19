import express from 'express'; // importar express
const app = express();

const posts = [
  {
      descricao: 'Gato brincando com um novelo de lã',
      imagem: 'https://placekitten.com/400/200'
  },
  {
      descricao: 'Paisagem de um pôr do sol',
      imagem: 'https://source.unsplash.com/random/400x300/?sunset'
  },
  {
      descricao: 'Cachorro correndo na praia',
      imagem: 'https://source.unsplash.com/random/400x300/?dog,beach'
  },
  {
      descricao: 'Comida deliciosa',
      imagem: 'https://source.unsplash.com/random/400x300/?food'
  },
  {
      // Adicione mais objetos aqui, com suas próprias descrições e imagens
      descricao: 'Seu post aqui',
      imagem: 'Seu link para a imagem aqui'
  }
];
// Servidor local sendo executado na porta 3000.
app.listen(3000,()=>{
  console.log('servidor escutando...');
});

// Rota (/api) | Get Obter uma informação
app.get('/api',(req, res)=>{
  res.status(200).send("Rota Inicial");
});
