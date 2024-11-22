import {criarPost, getTodosPosts} from "../models/postsModels.js";
import fs from 'fs';

// Listar posts e com resposta http 200 de sucesso
export  async function listarPosts(req, res){
  const result = await getTodosPosts();
  res.status(200).json(result); 
}
// Publicar Post
export async function PublicarPost(req ,res) {
  const novoPost = req.body;
  try{
    const postCriado = await criarPost(novoPost);
    res.status(200).json(postCriado);
  }catch(erro){
    console.log(error.message);
    res.status(500).json({"Erro":"Falha na requisição"})

  }
}

//Upload Image
export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}

// Rota de teste
export function Api(req, res){
  res.status(200).send("Bem Vindo"); 
}