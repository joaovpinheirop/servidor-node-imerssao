import express from  'express';
import listarPosts from '../controllers/postController.js';

 const routes = (app) =>{
  app.use(express.json());
  
  // ENDPOINT | ROTA (/posts) | Obter lista
  app.get('/posts', listarPosts);
}

export default routes;