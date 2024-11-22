import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js';

// Conectar com banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Obter todo o conteudo da da collection (posts) no banco de dados (imersão-back-end)
export  async function getTodosPosts(){
  const db = conexao.db('imersão-back-end');
  const colecao = db.collection('posts');
  return colecao.find().toArray();
}
// Adicionar um novo Post
export  async function criarPost(novoPost){
  const db = conexao.db('imersão-back-end');
  const colecao = db.collection('posts');
  return colecao.insertOne(novoPost)
}
// Atualizar Post
export  async function atualizarPost(id, post){
  const db = conexao.db('imersão-back-end');
  const colecao = db.collection('posts');
  const objId = ObjectId.createFromHexString(id)
  
  return colecao.updateOne({ _id: new ObjectId(objId)},{$set: post})
}