import conectarAoBanco from '../config/dbConfig.js';
// Se Conectar com o banco 
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosPosts(){
  const db = conexao.db('imersão-back-end');
  const colecao = db.collection('posts');
  return colecao.find().toArray();
}