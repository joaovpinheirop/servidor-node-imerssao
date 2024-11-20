import conectarAoBanco from '../config/dbConfig.js';

// Conectar com banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Obter todo o conteudo da da collection (posts) no banco de dados (imersão-back-end)
export default async function getTodosPosts(){
  const db = conexao.db('imersão-back-end');
  const colecao = db.collection('posts');
  return colecao.find().toArray();
}