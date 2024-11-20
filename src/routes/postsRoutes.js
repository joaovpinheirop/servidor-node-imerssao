import express from  'express';
import {listarPosts , Api, post} from '../controllers/postController.js';

const routes = (app) =>{
  app.use(express.json());
  
  // Listar todos os posts
  app.get('/posts', listarPosts);
  // Rota de teste
  app.get('/api',Api );
}

export default routes;