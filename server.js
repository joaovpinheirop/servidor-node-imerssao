import express from 'express'; // importar express

//Lista de Posts
const posts = [
  {
      id: 1,    
      descricao: 'Gato brincando com um novelo de lã',
      imagem: 'https://placekitten.com/400/200'
  },
  {
      id: 2,
      descricao: 'Paisagem de um pôr do sol',
      imagem: 'https://source.unsplash.com/random/400x300/?sunset'
  },
  {
      id: 3,
      descricao: 'Cachorro correndo na praia',
      imagem: 'https://source.unsplash.com/random/400x300/?dog,beach'
  },
  {
       id: 4,
      descricao: 'Comida deliciosa',
      imagem: 'https://source.unsplash.com/random/400x300/?food'
  },
];

const app = express();
app.use(express.json());

// Servidor local sendo executado na porta 3000.
app.listen(3000,()=>{
  console.log('servidor escutando...');
});

// ENDPOINT | ROTA (/posts) | Obter lista
app.get('/posts',(req, res)=>{
  res.status(200).json(posts);// converter para json
});

// Buscar Posts Por Id
function BuscarPostPorId(id){
  return posts.findIndex((post)=>{
    return post.id === Number(id);
  });
}

// ENDPOINT | ROTA (/posts) | Obter um objeto por id
app.get('/posts/:id',(req, res)=>{
  const index = BuscarPostPorId(req.params.id)
  res.status(200).json(posts[index]);// converter para json
});

