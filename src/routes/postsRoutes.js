import express from  'express';
import multer from 'multer';
import cors  from 'cors'
import {listarPosts , Api, PublicarPost, uploadImagem, atualizaPost} from '../controllers/postController.js';

const corsOptions = {
  origin : "http://localhost:8000",
  optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) =>{
  app.use(express.json());
  app.use(cors(corsOptions));
  // Rota de teste
  app.get('/api',Api );
  // Listar todos os posts
  app.get('/posts', listarPosts);
  // Criar um novo Post
  app.post('/posts',PublicarPost);
  app.post('/upload',upload.single('imagem'), uploadImagem);
  //Atualizar 
  app.put("/upload/:id", atualizaPost)
}

export default routes;