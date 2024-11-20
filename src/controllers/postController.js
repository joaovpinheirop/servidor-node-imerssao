import getTodosPosts from "../models/postsModels.js";

// Listar posts e com resposta http 200 de sucesso
export  async function listarPosts(req, res){
  const result = await getTodosPosts();
  res.status(200).json(result); 
}

// Rota de teste
export function Api(req, res){
  res.status(200).send("Bem Vindo"); 
}
