import express from  'express';
import {listarPosts , Api, PublicarPost} from '../controllers/postController.js';

const routes = (app) =>{
  app.use(express.json());
  
  // Rota de teste
  app.get('/api',Api );
  // Listar todos os posts
  app.get('/posts', listarPosts);
  // Criar um novo Post
  app.post('/posts',PublicarPost)
    // Criar um novo Post
    app.post('/posts/upload',PublicarPost)
}

export default routes;