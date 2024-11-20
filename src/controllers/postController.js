import getTodosPosts from "../models/postsModels.js";

export default async function listarPosts(req, res){
  const result = await getTodosPosts();
  res.status(200).json(result);// converter para json
}