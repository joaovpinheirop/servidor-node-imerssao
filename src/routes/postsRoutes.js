import express from  'express';

 const routes = (app) =>{
  app.use(express.json());

  // ENDPOINT | ROTA (/posts) | Obter lista
  app.get('/posts', async (req, res)=>{
  const result = await getTodosPosts();
  res.status(200).json(result);// converter para json
});
}

export default routes;